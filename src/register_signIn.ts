import "./styleSignIn.css";
let inputSignUp = document.querySelector(".input_sign_up") as HTMLDivElement;
let signIn = document.querySelector(".sign_in_block") as HTMLDivElement;
let column = document.querySelector(".column") as HTMLDivElement;
let error = document.querySelector(".error") as HTMLParagraphElement;
let storedData = localStorage.getItem('userDataArray');
let userDataArray: Array<any> = storedData ? JSON.parse(storedData) : [];

column.addEventListener("click", event => {
  let target = event.target as HTMLElement;
  if (
    target.classList.contains("register") &&
    !signIn.classList.contains("active")
  ) {
    inputSignUp.classList.toggle("active");
  }
});
column.addEventListener("click", event => {
  let target = event.target as HTMLElement;
  if (
    target.classList.contains("sign_in_2") &&
    !inputSignUp.classList.contains("active")
  ) {
    signIn.classList.toggle("active");
  }
});
document.addEventListener("submit", event => {
  let target = event.target as HTMLFormElement;
  if (target.classList.contains("form")) {
    event.preventDefault();

    const fullNameInput = target.querySelector(
      '.input[name="fullName"]'
    ) as HTMLInputElement;
    const emailInput = target.querySelector(
      '.input[name="email"]'
    ) as HTMLInputElement;
    const passwordInput = target.querySelector(
      '.input[name="password"]'
    ) as HTMLInputElement;
    const userExists = userDataArray.some(
      user =>
        user.email === emailInput.value || user.password === passwordInput.value
    );
    if (userExists) {
      error.classList.add("error_show");
    } else if(fullNameInput.value == '' || emailInput.value == '' || passwordInput.value == ''){
			error.textContent = 'Заполните все поля'
			error.classList.add('error_show')
		}
		 else {
			error.classList.remove('error_show')
      const userData = {
        fullName: fullNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };

      userDataArray.push(userData);
			localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
      target.reset();
      console.log("Пользователь зарегистрирован:", userData);
      console.log("Массив пользователей:", userDataArray);
    }
  }
});
