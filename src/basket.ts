import "./styleCart.css"
let cart = document.querySelector('.items') as HTMLDivElement
let emptyAlert = document.querySelector('.basket_empty') as HTMLHeadingElement
if(cart.childElementCount === 0){
	emptyAlert.style.opacity = '1'
}
