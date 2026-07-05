let currentLang = "en";

const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentLang = btn.dataset.lang;

    displayProducts(products);
  });
});