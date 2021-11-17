const items = document.getElementById('items');


/*récupérer les données*/
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(products) {
    for(let i = 0; i < products.length; i ++){
        items.innerHTML +=` 
        <a href="./product.html?id=${products[i]._id}">
        <article>
          <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
          <h3 class="productName">${products[i].name}</h3>
          <p class="productDescription">${products[i].description}</p>
        </article>
        </a>
      `; }

  })
  .catch(function(err) {
    // Une erreur est survenue
  });

/*base URL*/
let searchParams = new URLSearchParams(window.location.search);

if(searchParams.has('id'));
  let kanapId = searchParams.get('id');
  console.log(kanapId);

/*l'URL inclut déjà l'ID du produit sélectionné */

