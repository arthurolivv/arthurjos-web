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

//popup box modal cv languages
const opnbtncv = document.getElementById("open-modal");
const clsbtncv = document.getElementById("close-modal");
const modalcv = document.getElementById("modal");

opnbtn.addEventListener("click",() =>{
    modalcv.classList.add("open");
});
clsbtn.addEventListener("click",() =>{
    modalcv.classList.remove("open");
});

//success email
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão para capturar a resposta
  fetch(this.action, {
      method: this.method,
      body: new FormData(this),
  }).then(() => {
      window.location.href = "https://127.0.0.1:5500/tks.html"; // URL personalizada
  });
});