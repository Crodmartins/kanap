//récupération données local storage //
let productsInCart = JSON.parse(localStorage.getItem('cart'));
console.log(productsInCart);

//modification du code html // 
const cartItems = document.getElementById('cart__items');

//Création boucle pour chaque ligne //
for (i = 0; i < productsInCart.length; i++) {
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${productsInCart[i].id}">
                <div class="cart__item__img">
                  <img src="${productsInCart[i].image}" alt="${productsInCart[i].alt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${productsInCart[i].name}</h2>
                    <p>${productsInCart[i].price} €</p>
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
              </article>`;
}

/*WIP

//modification de la quantité 
let itemQty = document.getElementsByClassName('itemQuantity');

itemQty[i].addEventListener('change',(event)=> {

for (i = 0; i < productsInLocalStorage.length; i++) {//je parcours le tableau 
  if (productsInLocalStorage[i].id === id && productsInLocalStorage[i].color)
    localStorage.setItem('cart', JSON.stringify(products));//je mets à jour le local storage
  })
}
*/

//suppression d'un produit
let deleteItem = document.getElementsByClassName('deleteItem');


function deleteProduct() {
  
  for (let i = 0; i < productsInCart.length; i++) {
      
    deleteItem[i].addEventListener('click', (event) => {
      let deleteId = productsInCart[i].id;//déclarer l'ID sélectionné par le bouton supprimer
      let deleteColor = productsInCart[i].color;//déclarer la couleur sélectionnée par le bouton supprimer 
      
      console.log(deleteId);
      console.log(deleteColor);

      productsInCart = productsInCart.find( elt => elt.id !== deleteId || elt.color !== deleteColor);//filtrer sur l'élément cliqué par le bouton suppr

     localStorage.setItem('cart', JSON.stringify(productsInCart));//je mets à jour le local storage//je mets à jour le local storate
    });
  }

}
deleteProduct();

//visuellement montrer que le panier est vide = faire un reload