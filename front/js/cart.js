//récupération données local storage //
let productInLocalStorage = JSON.parse(localStorage.getItem('cart'));
console.log(productInLocalStorage);

//modification du code html // 
const cartItems = document.getElementById('cart__items');

//Création boucle pour chaque ligne //
for (i = 0; i < productInLocalStorage.length; i++) {
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${productInLocalStorage[i].id}">
                <div class="cart__item__img">
                  <img src="${productInLocalStorage[i].image}" alt="${productInLocalStorage[i].alt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${productInLocalStorage[i].name}</h2>
                    <p>${productInLocalStorage[i].price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : ${productInLocalStorage[i].quantity}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productInLocalStorage[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
}
