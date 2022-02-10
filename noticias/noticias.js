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

// Teste manipulando o DOM
let texto = document.querySelector("iframe");
let artigoClicado = localStorage.getItem("artigo");

// Oque eh HTML5
if(artigoClicado == "artigo1") {
	texto.setAttribute("src", "artigosTxt/HTML.txt");
}

// oque sao sistemas embarcados
if(artigoClicado == "artigo2") {
	texto.setAttribute("src", "artigosTxt/sisEmbarcados.txt");
}

// Oque eh CSS3
if(artigoClicado == "artigo3") {
	texto.setAttribute("src", "artigosTxt/CSS.txt");	
}

// ESP32
if(artigoClicado == "artigo4") {
	texto.setAttribute("src", "artigosTxt/esp32.txt");	
}

// como funciona o javascript
if(artigoClicado == "artigo5") {
	texto.setAttribute("src", "artigosTxt/JS.txt");	
}

// arduino
if(artigoClicado == "artigo6") {
	texto.setAttribute("src", "artigosTxt/arduino.txt");	
}

// navegadores
if(artigoClicado == "artigo7") {
	texto.setAttribute("src", "artigosTxt/navegadores.txt");
}

// Assembly
if(artigoClicado == "artigo8") {
	texto.setAttribute("src", "artigosTxt/assembly.txt");
}

// como funciona a internet
if(artigoClicado == "artigo9") {
	texto.setAttribute("src", "artigosTxt/internet.txt");
}

// programacao em C
if(artigoClicado == "artigo10") {
	texto.setAttribute("src", "artigosTxt/programacaoC.txt");
}

console.log(localStorage);