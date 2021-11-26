//récupérer l'ID du canapé dans l'URL
const str = window.location.href;
let url = new URL(str);
let id = url.searchParams.get("id");            

let UrlProduct = `http://localhost:3000/api/products/${id}`;   
console.log(UrlProduct);

//identifier les éléments à modifier
let image = document.querySelector('.item__img')    
let title = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let colors = document.getElementById('colors');


//recevoir les données
fetch (UrlProduct)                                            
  .then(function(res) {
    if (res.ok) {
      return res.json();
  }
})
  .then(function(product) {
    image.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    title.innerHTML = `<h1 id="title">${product.name}</h1>`
    price.innerHTML = `<span id="price">${product.price}</span>€</p>`
    description.innerHTML = `<p id="description">${product.description}</p>`
    for (let i = 0; i < product.colors.length; i++) {
      colors.innerHTML += 
      `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
    }
  })
  .catch(function(err) {
    // Une erreur est survenue
  })

//déclarer la quantité et les couleurs
let selectQuantity = document.getElementById('quantity');
let selectColors = document.getElementById('colors');

//déclares les informations du produits à récupérer
let product = id ;

let selectionProduct = {
  id: id,
  image: product.imageUrl,
  name: product.title,  
  price: product.price,
  color: selectColors.value,
  quantity: selectQuantity.value,
};

//indiquer où et quoi mettre dans le panier
let addToCart = document.getElementById('addToCart');
let cart =[selectionProduct];

//suite à l'évènement clic sur le bouton panier
addToCart.addEventListener('click', (event) => {
let cart =  JSON.parse(localStorage.getItem('cart'));

//il faut une couleur et une quantité minimum pour ajouter au panier 
if (selectQuantity.value > 0 && selectQuantity.value <=100 && selectQuantity.value != 0){
  }
//si panier vide, ajouter une nouvelle ligne de produit)
if (cart == null){
    localStorage.setItem('cart',JSON.stringify(selectionProduct));
}
//si produit avec même id et couleur déjà dans le panier, incrémenter la quantité
if (product.id == id && product.color == selectColors.value){
    productInLocalStorage[key].quantity = parseInt(productOk.quantity) + parseInt(selectQuantity.value);
    localStorage.setItem('cart', JSON.stringify(productInLocalStorage));
  }
})