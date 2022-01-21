//récupération données local storage //
let productsInCart = JSON.parse(localStorage.getItem('cart'));
console.log(productsInCart);

//modification du code html // 
const cartItems = document.getElementById('cart__items');

//Création boucle pour chaque ligne pour afficher les données //
for (let i = 0; i < productsInCart.length; i++) {
  let id = productsInCart[i].id;
  let UrlProduct = `http://localhost:3000/api/products/${id}`; 
  
  //j'appelle l'API pour récupérer la donnée prix
fetch (UrlProduct)                                            
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
