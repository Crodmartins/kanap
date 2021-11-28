/* Récupération des données et affichage du produit*/

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
const getProduct = fetch (UrlProduct)                                            
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


/**Ajout du produit dans le panier */  

//déclarer les valeurs nécessaires
let selectQuantity = document.getElementById('quantity'); //quantité du produit sélectionné
let selectColors = document.getElementById('colors'); //couleur sélectionnée par l'utilisateur
let addToCart = document.getElementById('addToCart');//bouton qui va ajouter dans le panier
let cart = localStorage.getItem('cart');//du contenu du produit

getProduct.then((product) => { //récupération des infos du produit
  let selectionProduct = {
    id: product._id,
    image: product.imageUrl,
    name: product.title,  
    price: parseInt(product.price),//transformer une string en nombre
    color: selectColors.value,
    quantity: parseInt(selectQuantity.value),
  };
  
  addToCart.addEventListener('click', (event) => { //produit existant, clic sur le bouton 
    if (cart == null){ //si panier n'est pas vide
    JSON.parse(localStorage.getItem('cart')); //je récupère les données pour les lire
      if (selectQuantity.value > 0 && selectQuantity.value <=100 && selectQuantity.value != 0){//si la quantité est >0 et <100
        localStorage.setItem('cart', JSON.stringify(addToCart));//je stocke la donnée
      }
      if (product.id == id && product.color == selectColors.value){//si l'ID et la couleur d'un produit sont identiquées
        productInLocalStorage[key].quantity = parseInt(productOk.quantity) + parseInt(selectQuantity.value);//incrémenter la quantité
        localStorage.setItem('cart', JSON.stringify(productInLocalStorage));//je stocke la donnée
      }
    } else {
      localStorage.setItem('cart',JSON.stringify([selectionProduct]));//je stocke la donnée d'un nouveau produit
    }
  })
});
