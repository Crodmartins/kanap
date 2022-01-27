/*AFFICHAGE PANIER*/
let productsInCart = JSON.parse(localStorage.getItem('cart'));//je récupère les données du local storage
console.log(productsInCart);

const cartItems = document.getElementById('cart__items');//je sélectionne le code html à modifier

for (let i = 0; i < productsInCart.length; i++) {//je créé une boucle pour chaque produit
  let id = productsInCart[i].id;
  let UrlProduct = `http://localhost:3000/api/products/${id}`; //j'appelle l'API en fonction de l'ID du produit au panier
  
fetch (UrlProduct) //j'appelle l'API pour récupérer les données                                          
   .then(function(res) {
    if (res.ok) {
    return res.json();
    }
  })
    .then(function(product) {
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
            })
    .catch(function(err) {
      // Une erreur est survenue
    });
}

/*CALCUL DE LA QUANTITE*/

let totalItems = 0;
  
for (let i = 0; i < productsInCart.length; i++) {//je calcule les quantités totales
  totalItems += productsInCart[i].quantity;
  }

  let totalQuantity = document.getElementById('totalQuantity');
  totalQuantity.innerHTML = totalItems;//j'affiche la quantité totale

/*CALCUL DU PRIX TOTAL*/
let totalAmount = 0;

for (let i = 0; i < productsInCart.length; i++) {//je créé une boucle pour chaque produit
  let id = productsInCart[i].id;
  let UrlProduct = `http://localhost:3000/api/products/${id}`; //j'appelle l'API en fonction de l'ID du produit au panier
  
  let totalPrice = document.getElementById('totalPrice');
  
fetch (UrlProduct) //j'appelle l'API pour récupérer les données                                          
   .then(function(res) {
    if (res.ok) {
    return res.json();
    }
  })
    .then(function(product) {
      totalAmount += (product.price * productsInCart[i].quantity);
      totalPrice.innerHTML = totalAmount;
    })
    .catch(function(err) {
      // Une erreur est survenue
    });

  }