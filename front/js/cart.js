//récupération données local storage //
let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
let products = [];

//modification du code html // 
const cartItems = document.getElementById('cart__items');

let cart__item = document.querySelector('.cart__item');

//Création boucle pour chaque ligne //
for (i = 0; i < productInLocalStorage.length; i++) {
    products.push(productInLocalStorage[i].id);
    cartItems.innerHTML +=

    `<!--  <article class="cart__item" data-id="${productInLocalStorage[i].id}">
                <div class="cart__item__img">
                  <img src="${productInLocalStorage[i].imageURL}" alt="${productInLocalStorage[i].alt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${productInLocalStorage[i].name}</h2>
                    <p>${productInLocalStorage[i].color}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productInLocalStorage[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> -->`;
}
