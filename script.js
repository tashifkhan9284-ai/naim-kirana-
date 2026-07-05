const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar input");
const categoryButtons = document.querySelectorAll(".category");
const langButtons = document.querySelectorAll(".lang-btn");

let products = [];
let currentLang = "en";
let currentCategory = "all";

/* =========================
   LOAD PRODUCTS
========================= */

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(item => {
    const name =
      currentLang === "en"
        ? item.name_en
        : currentLang === "hi"
        ? item.name_hi
        : item.name_mr;

    const card = document.createElement("div");
    card.classList.add("product", "fade-in");

    card.innerHTML = `
      <img src="${item.image}" alt="${name}">
      <div class="product-info">
        <h3>${name}</h3>
        <p>₹${item.price || 0}</p>
        <button onclick="orderNow('${name}')">Order Now</button>
      </div>
    `;

    productContainer.appendChild(card);
  });
}

/* =========================
   SEARCH FUNCTION
========================= */

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter(p => {
    const name =
      currentLang === "en"
        ? p.name_en
        : currentLang === "hi"
        ? p.name_hi
        : p.name_mr;

    return name.toLowerCase().includes(value);
  });

  displayProducts(filtered);
});

/* =========================
   CATEGORY FILTER
========================= */

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentCategory = btn.dataset.category;

    if (currentCategory === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(
        p => p.category === currentCategory
      );
      displayProducts(filtered);
    }
  });
});

/* =========================
   LANGUAGE SWITCH
========================= */

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentLang = btn.dataset.lang;
    displayProducts(products);
  });
});

/* =========================
   WHATSAPP ORDER
========================= */

function orderNow(productName) {
  const phone = "918483975621";

  const message = `Hello! I want to order: ${productName}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}