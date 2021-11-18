/*récupérer l'ID du canapé dans l'URL*/
const str = window.location.href;
var url = new URL(str);
id = url.searchParams.get("id");            

let UrlProduct = `http://localhost:3000/api/products/${id}`;   
console.log(UrlProduct);

/*recevoir les données*/
fetch (UrlProduct)                                            
  .then(function(res) {
    if (res.ok) {
      return res.json();
  }
})
  .then(function(products) {
  for(let product in product){


  let photo = document.querySelector('.item__img')    
  const baliseImg = document.createElement('img');
  baliseImg.src = data.imageUrl;  // Recupere l'image dans l'api 
  baliseImg.alt = data.altTxt; // récupère le alt 
  photo.appendChild(baliseImg);   // Ajoute l'image dans le Html
  
  })
  .catch(function(err) {
    // Une erreur est survenue
  });