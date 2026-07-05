// Product list container
const productList = document.getElementById("product-list");

// Products load from products.json
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    productList.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="orderNow('${product.name}')">
          Order Now
        </button>
      `;

      productList.appendChild(card);
    });
  })
  .catch(error => {
    productList.innerHTML =
      "<p>Products load nahi ho paaye.</p>";
    console.error(error);
  });

// Order button
function orderNow(productName) {
  const phone = "918483975621"; // Apna WhatsApp number

  const message = `Hello! Mujhe ${productName} order karna hai.`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}