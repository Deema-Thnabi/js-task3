async function getProducts(){
     const response = await fetch("https://dummyjson.com/products");
     const data = await response.json();
     const products = data.products;
     console.log(products);

     const result = products.map(function(product){
          return `
        <div class="product">
            <img src="${product.thumbnail}">
            <div class="content">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
            </div>
            <div class="button">
                <button>Add to Cart</button>
            </div>
        </div>
          `;
     }).join('');

     document.querySelector(".products").innerHTML = result;
 
}

getProducts();