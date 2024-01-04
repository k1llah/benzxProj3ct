import "./styleSignIn.css";
let inputSignUp = document.querySelector('.input_sign_up') as HTMLDivElement
let signIn = document.querySelector('.sign_in_block') as HTMLDivElement
let column = document.querySelector('.column') as HTMLDivElement
column.addEventListener('click', (event) =>{
	let target = event.target as HTMLElement
	if (target.classList.contains('register') && !signIn.classList.contains('active')) {
    inputSignUp.classList.toggle('active')
	}
})
column.addEventListener('click', (event) =>{
	let target = event.target as HTMLElement
	if (target.classList.contains('sign_in_2') && !inputSignUp.classList.contains('active')) {
   signIn.classList.toggle('active')
	}
})