let cart = 0;

const products = [
  { name: "Amul Milk", price: 32 },
  { name: "Balaji Wafers", price: 20 },
  { name: "Coca Cola", price: 40 },
  { name: "Ice Cream", price: 50 }
];

const productList = document.getElementById("product-list");

function showProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = cart;
}

showProducts(products);

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );
  showProducts(filtered);
});