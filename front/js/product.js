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
    return product;
  })
  .catch(function(err) {
    // Une erreur est survenue
  })


/**Ajout du produit dans le panier */  

//déclarer les valeurs nécessaires
let selectQuantity = document.getElementById('quantity'); //quantité du produit sélectionné
let selectColors = document.getElementById('colors'); //couleur sélectionnée par l'utilisateur
let addToCart = document.getElementById('addToCart');//bouton qui va ajouter dans le panier
let cart = localStorage.getItem("cart");//du contenu du produit
let productsInCart = JSON.parse(localStorage.getItem('cart'));
let products = [];//je crée le tableau

getProduct.then((product) => {
  let selectionProduct = {//récupération des infos du produit
    id: product._id,
    image: product.imageUrl,
    name: product.name,  
    price: parseInt(product.price),//transformer une string en nombre
  };
  console.log(selectColors.value);//vérifier qu'on a bien récupéré les données
    
    addToCart.addEventListener('click', (event) => { //produit existant, clic sur le bouton 
      selectionProduct.color = selectColors.value;
      selectionProduct.quantity = parseInt(selectQuantity.value);
    
      console.log(selectionProduct);
            
        if (productsInCart != null) { //si panier n'est pas vide 
        
        for (let i = 0; i < products.length; i++) {//je parcours le panier pour voir le contenu
          console.log(products[i].color);
          if (selectionProduct.id == products[i].id && selectColors.value == products[i].color){//si j'ajoute un produit avec le même id et couleur
            //alors sa quantité  = sa quantité actuelle + quantité du produit sélectionné 
            products[i].quantity = products[i].quantity + selectionProduct.quantity;
            localStorage.setItem('cart', JSON.stringify(products));//je mets à jour le local storage
            console.table(products);
          } else {
            products.push(selectionProduct);//si le panier n'est pas vide, j'ajoute le produit à la liste
            localStorage.setItem('cart', JSON.stringify(products));//je mets à jour le local storage
          }}
      //si le panier est vide 
        } else {
          products.push(selectionProduct);// j'ajoute le produit
          localStorage.setItem('cart', JSON.stringify(products));//je mets à jour le local storage
          console.table(products); 
        }
    });
  })

/*la quantité ne s'incrémente pas 
la nouvelle couleur ajoutée écrase la couleur du produit précédent*/