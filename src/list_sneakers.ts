import "./style.css";
console.log("new project");
let arrOfSneakers = [
  {
    img: "airmax.webp",
    name: " Nike airmax",
    coast: 12_700,
  },
  {
    img: "potat.jpeg",
    name: "vans knu school",
    coast: 15_300,
		type: 'Кеды'
  },
  {
    img: "trainer.webp",
    name: " Nike airmax",
    coast: 11_200,
		type: 'Кроссовки'
  },
  {
    img: "purp.jpeg",
    name: " Nike air Jordan Purple metallic",
    coast: 13_800,
		type: 'Кроссовки'
  },
	{
    img: "purp.jpeg",
    name: " Nike air Jordan Purple metallic",
    coast: 13_800,
		type: 'Кроссовки'
  },
];
let items = document.querySelector(".items") as HTMLDivElement;
function renderCards(arg:any){
	items.innerHTML = ''
arrOfSneakers.forEach(el => {
  let cardWrapper = document.createElement("div") as HTMLDivElement;
  cardWrapper.className = "card_wrapper";

  let imgCard = document.createElement("img") as HTMLImageElement;
  imgCard.src = el.img;
  imgCard.className = "img_card";

  let pCard = document.createElement("p") as HTMLParagraphElement;
  pCard.className = "name_card";
  pCard.textContent = el.name;

  let coastP = document.createElement("p") as HTMLDivElement;
  coastP.className = "coast_p";
  coastP.textContent = "Цена:";

  let price = document.createElement("p") as HTMLParagraphElement;
	price.className = 'priceP'
  price.textContent = el.coast.toLocaleString();

  let addButton = document.createElement("button") as HTMLButtonElement;
  addButton.className = "add_button";
  addButton.textContent = "+";

  let divCoast = document.createElement("div") as HTMLDivElement;
	divCoast.className = 'div_coast'
  divCoast.appendChild(coastP);
  divCoast.appendChild(price);
  let divBottomCard = document.createElement("div") as HTMLDivElement;
	divBottomCard.className = 'div_bottom_card'
  divBottomCard.appendChild(divCoast);
  divBottomCard.appendChild(addButton);
  divCoast.appendChild(coastP);
  divCoast.appendChild(price);

  divBottomCard.appendChild(divCoast);
  divBottomCard.appendChild(addButton);

  cardWrapper.appendChild(imgCard);
  cardWrapper.appendChild(pCard);
  cardWrapper.appendChild(divBottomCard);

  items.appendChild(cardWrapper);
});
}
let select = document.querySelector('.filter') as HTMLSelectElement
const savedFilter = localStorage.getItem('selectedFilter');
if (savedFilter) {
  select.value = savedFilter;
}
function sortByNameAscending(a:any, b:any) {
  return a.name.localeCompare(b.name);
}
	
	select.addEventListener('change',(el)=>{
		let target = el.target as HTMLSelectElement
		localStorage.setItem('selectedFilter', target.value);
		if(select.value == 'by_name'){
			const sortedProducts = [...arrOfSneakers].sort(sortByNameAscending);
			renderCards(sortedProducts)
		}
		else if(target.value == 'expensive'){
			const currentProducts = [...arrOfSneakers].sort((a, b) => b.coast - a.coast);
			renderCards(currentProducts)
		}
		console.log(target.value)
	})

