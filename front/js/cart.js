//récupération données local storage //
let productsInLocalStorage = JSON.parse(localStorage.getItem('cart'));
console.log(productsInLocalStorage);

//modification du code html // 
const cartItems = document.getElementById('cart__items');

//Création boucle pour chaque ligne //
for (i = 0; i < productsInLocalStorage.length; i++) {
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${productsInLocalStorage[i].id}">
                <div class="cart__item__img">
                  <img src="${productsInLocalStorage[i].image}" alt="${productsInLocalStorage[i].alt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${productsInLocalStorage[i].name}</h2>
                    <p>${productsInLocalStorage[i].price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productsInLocalStorage[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
}
