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
function renderCards(data:any){
	items.innerHTML = ''
	items.innerHTML = data.map((el:any) => `
  <div class="card_wrapper">
      <img src="${el.img}" class="img_card">
      <p class="name_card">${el.name}</p>
      <div class="div_bottom_card">
        <div class="div_coast">
          <p class="coast_p">Цена:</p>
          <p class="priceP">${el.coast.toLocaleString()}</p>
        </div>
        <button class="add_button">+</button>
      </div>
    </div>
  `).join('');
}
let select = document.querySelector('.filter') as HTMLSelectElement
const savedFilter = localStorage.getItem('selectedFilter');
if (savedFilter) {
  select.value = savedFilter;
}
const sortByNameAscending = (a:any, b:any) => a.name.localeCompare(b.name);

	
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
	
		console.log(select.value)

