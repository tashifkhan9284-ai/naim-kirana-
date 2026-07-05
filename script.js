fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById("products");

    products.forEach(product => {
      productList.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        </div>
      `;
    });
  })
  .catch(error => console.log("Error:", error));