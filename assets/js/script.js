'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// navbar variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede a navegação padrão (e.g., redirecionamento)

    // Remover a classe 'active' de todos os itens e adicionar novamente no item clicado
    navigationLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");

    // Navegação para a seção correspondente
    const targetPage = link.textContent.toLowerCase(); // Obtém o nome da seção (e.g., "about", "resume")
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active"); // Torna a seção visível
        page.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até a seção
      } else {
        page.classList.remove("active"); // Esconde as outras seções
      }
    });
  });
});


// //  modals
// Seleciona todos os botões que abrem modais
document.querySelectorAll("[data-open-modal]").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-open-modal"); // Pega o ID do modal
    document.getElementById(modalId).classList.add("open");
  });
});

// Seleciona todos os botões que fecham modais
document.querySelectorAll("[data-close-modal]").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-modal"); // Pega o ID do modal
    document.getElementById(modalId).classList.remove("open");
  });
});


/*
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = "tks.html"; // Redireciona localmente após o envio bem-sucedido
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao enviar o formulário.");
    });
});*/

//ver mais button
document.querySelector(".contact-seemore-in").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-seemore-out").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});

/*
//modal portfolio
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('carouselImage');
const titleEl = document.getElementById('projectTitle');
const descEl = document.getElementById('projectText');
const githubEl = document.getElementById('githubLink');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let images = [];
let currentIndex = 0;

// Atualiza a imagem
const updateImage = () => {
  modalImage.src = images[currentIndex];
};

// Abre o modal com dados do projeto
function openModal(title, description, githubLink, imgArray) {
  titleEl.textContent = title;
  descEl.textContent = description;
  githubEl.href = githubLink;
  images = imgArray;
  currentIndex = 0;
  updateImage();

  modal.classList.add('open');
}

// Fecha o modal
function closeModal() {
  modal.classList.remove('open');
}

// Eventos do carrossel
prevBtn.onclick = () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateImage();
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateImage();
};

// Fecha ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Ativa modal ao clicar no item do projeto
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');
    const githubLink = item.getAttribute('data-github');
    const imageList = JSON.parse(item.getAttribute('data-images'));

    openModal(title, description, githubLink, imageList);
  });
});*/

