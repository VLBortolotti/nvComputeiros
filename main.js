// Menu Hamburguer (responsivo) e pagina ativa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))


// Filtro de Busca
filterSelection("todos")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "todos") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Seta voltar pra cima
const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

// LocalStorage
console.log("ATUALIZADO!2");
function artigoClicado(artigo) {
  localStorage.removeItem("artigo");
  if (artigo == 'artigo1') {
    return localStorage.setItem("artigo", "artigo1")
  }

  else if (artigo == 'artigo2') {
    return localStorage.setItem("artigo", "artigo2")
  }

  else if (artigo == 'artigo3') {
    return localStorage.setItem("artigo", "artigo3")
  }

  else if (artigo == 'artigo4') {
    return localStorage.setItem("artigo", "artigo4")
  }

  else if (artigo == 'artigo5') {
    return localStorage.setItem("artigo", "artigo5")
  }

  else if (artigo == 'artigo6') {
    return localStorage.setItem("artigo", "artigo6")
  }
  
  else if (artigo == 'artigo7') {
    return localStorage.setItem("artigo", "artigo7")
  }

  else if (artigo == 'artigo8') {
    return localStorage.setItem("artigo", "artigo8")
  }

  else if (artigo == 'artigo9') {
    return localStorage.setItem("artigo", "artigo9")
  }

  else if (artigo == 'artigo10') {
    return localStorage.setItem("artigo", "artigo10")
  }
}
