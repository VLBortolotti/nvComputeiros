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


if (".password" < 8){
	function cadastrar(){
		const cadastro = {

	
			email: document.querySelector('.email').value, senha: document.querySelector('.password').value, 
			
		};
		


		localStorage.setItem('cadastro', JSON.stringify(cadastro));

		const cadass = JSON.parse(localStorage.getItem('cada'));
		console.log(cadass.email)
	}
	let cadastro = JSON.parse(localStorage.getItem('cada'));
		
	
}




