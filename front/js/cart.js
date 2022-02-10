let productsInCart = JSON.parse(localStorage.getItem('cart'));//je récupère les données du local storage

for (let i = 0; i < productsInCart.length; i++) {//je créé une boucle pour parcourir chaque produit
  let id = productsInCart[i].id;
  let UrlProduct = `http://localhost:3000/api/products/${id}`; //j'appelle l'API en fonction de l'ID du produit au panier

fetch (UrlProduct) //j'appelle l'API pour récupérer les données                             
  .then(function(res) {
   if (res.ok) {
   return res.json();
   }
 })
  .then(function(product){ //j'affiche les données du panier
    const cartItems = document.getElementById('cart__items');//je sélectionne le code html à modifier pour le panier
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${productsInCart[i].id}">
      <div class="cart__item__img">
        <img src="${product.imageUrl}" alt="${product.alt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${product.name}</h2>
          <h3>${productsInCart[i].color}<h3>
          <p>${product.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productsInCart[i].quantity}">
         </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
      </div>
    </article>
    `;
  return product;
  })
  .then((sumQuantity) => {
    for (let i = 0; i < productsInCart.length; i++) {//je parcours mon local storage
      let totalItems = 0;
      totalItems =+ productsInCart[i].quantity;//je calcule le nombre de produits dans le panier
      console.log(totalItems);
      let totalQuantity = document.getElementById('totalQuantity');
      totalQuantity.innerHTML = totalItems;//j'affiche la quantité totale
      return sumQuantity;
    }
  })
  .then((product) => {
    for (let i = 0; i < productsInCart.length; i++) {//je parcours mon local storage
      let totalAmount = 0;
      console.log(product.price);
      totalAmount += product.price * productsInCart[i].quantity;//je calcule le prix total des produits dans le panier
      let totalPrice = document.getElementById('totalPrice');
      totalPrice.innerHTML = totalAmount;//j'affiche le prix total
      return product;
    }
  })

  .catch (e => {
    console.log('une erreur est survenue');
  });
}




//SUPPRESSION D'UN PRODUIT
/*let deleteItem = document.getElementsByClassName('deleteItem');

let deleteItemId = deleteItem.closest(data-id);//je récupère l'id du produit sur lequel j'ai cliqué
console.log(deleteItemId);

for (let i = 0; i < deleteItem.length; i++) {

  deleteItem[i].addEventListener('click', (event) => {

  event.target
  localStorage.removeItem('cart',JSON.stringify(productsInCart)); //je mets à jour le local storage//
  alert("produit supprimé");
  location.reload();
  });
}*/
