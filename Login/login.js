// Troca de telas de login para registro, e verifacao
function trocarForm(className, e) {
	e.preventDefault();
	const todosForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	todosForm.forEach(item=> {
		item.classList.remove('active');
	})

	form.classList.add('active');
}

// Validando se as senhas no registro sao iguais
const senhaRegistro = document.querySelector('form.register #password');
const senhaRegistroConfirmacao = document.querySelector('form.register #confirm-pass');

senhaRegistro.addEventListener('input', function () {
	senhaRegistroConfirmacao.pattern = `${this.value}`;
})