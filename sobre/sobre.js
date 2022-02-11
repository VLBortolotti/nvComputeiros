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

// Montanto o image slider
var slides = document.querySelector('.slider-items').children;
var proximoSlide = document.querySelector('.direita-slider');
var anteriorSlide = document.querySelector('.esquerda-slider');
var totalSlides = slides.length;
var indice = 0;

function proximo() {
	next("proximo")
	resetarTempo();
};

function anterior() {
	next("anterior")
	resetarTempo();
};

function next(direcao) {
	if(direcao == "proximo") {
		indice++;

		if(indice == totalSlides) {
			indice = 0;
		};
	}

	else {
		if(indice == 0){
			indice = totalSlides - 1;
		}
		else{
			indice--;
		}

	}

	for(i=0; i<slides.length; i++) {
		slides[i].classList.remove("active");
	}
	slides[indice].classList.add("active");
}


function resetarTempo() {
// Para de contar o tempo se o botao anterior ou proximo for clicado
	clearInterval(tempo);
// e volta a contar do início novamente
	tempo = setInterval(autoPlay,2500);
}

function autoPlay(){
	next('proximo');
}

var tempo = setInterval(autoPlay,2500);