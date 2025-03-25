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


//success email
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
});

//ver mais button
document.querySelector(".contact-seemore-in").addEventListener("click", function() {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  });
document.querySelector(".contact-seemore-out").addEventListener("click", function() {
document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});

//modal portfolio
// Abrir modal ao clicar no item do projeto
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Pegando os dados do projeto
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');
    const githubLink = item.getAttribute('data-github');
    const images = JSON.parse(item.getAttribute('data-images'));

    // Atualizando conteúdo do modal
    document.getElementById('projectTitle').textContent = title;
    document.getElementById('projectText').textContent = description;
    document.getElementById('githubLink').setAttribute('href', githubLink);
    let currentIndex = 0;

    // Função para atualizar a imagem no carrossel
    const updateImage = () => {
      document.getElementById('carouselImage').src = images[currentIndex];
    };

    // Atualizando a imagem inicial
    updateImage();

    // Funções do carrossel
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateImage();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage();
    });

    // Mostra o modal
    document.getElementById('projectModal').style.display = 'block';
  });
});

// Fechar modal
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('projectModal').style.display = 'none';
});

// Fechar modal se clicar fora da área do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('projectModal')) {
    document.getElementById('projectModal').style.display = 'none';
  }
});

