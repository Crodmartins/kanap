/*récupérer l'ID du canapé dans l'URL*/
const str = window.location.href;
let url = new URL(str);
let id = url.searchParams.get("id");            

let UrlProduct = `http://localhost:3000/api/products/${id}`;   
console.log(UrlProduct);

let photo = document.querySelector('.item__img')    
const baliseImg = document.createElement('img');

/*recevoir les données*/
fetch (UrlProduct)                                            
  .then(function(res) {
    if (res.ok) {
      return res.json();
  }
})
  .then(function(product) {
    photo.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

  /*lister éléments hmtl - console.log pour vérifier à chaque élément
  