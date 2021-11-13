/*récupérer les données*/
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(products) {
    console.log(products);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });


/*boucle pour chaque article des items*/
function console(products){
    for (product of products) {
        const itemCard = document.getElementById('items'); 
        itemCard.innerHTML +=` 
        <a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
        </a>
      ';
    }
};
