/*récupérer l'ID du canapé dans l'URL*/
const str = window.location.href;
let url = new URL(str);
let id = url.searchParams.get("id");            

let UrlProduct = `http://localhost:3000/api/products/${id}`;   
console.log(UrlProduct);

let photo = document.querySelector('.item__img')    
let title = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');

/*recevoir les données*/
fetch (UrlProduct)                                            
  .then(function(res) {
    if (res.ok) {
      return res.json();
  }
})
  .then(function(product) {
    photo.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    title.innerHTML = `<h1 id="title">${product.name}</h1>`
    price.innerHTML = `<span id="price">${product.price}</span>€</p>`
    description.innerHTML = `<p id="description">${product.description}</p>`
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

  /*lister éléments hmtl - console.log pour vérifier à chaque élément*/