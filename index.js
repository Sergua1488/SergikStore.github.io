// ===================
// 🛒 КОРЗИНА
// ===================
let cart = [];

const cartCount = document.getElementById("cart-count");
const productButtons = document.querySelectorAll(".card .btn");

productButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");

    const name = card.querySelector("h3")?.innerText;
    const price = card.querySelector("h2")?.innerText;

    if (!name || !price) return;

    cart.push({ name, price });
    cartCount.textContent = cart.length;

    alert(`${name} добавлен в корзину 🛒`);
  });
});

// ===================
// 💳 ОФОРМЛЕНИЕ ЗАКАЗА
// ===================
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const checkoutBtn = document.getElementById("checkout");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Корзина пуста!");
      return;
    }

    modal.style.display = "block";
    cart = [];
    cartCount.textContent = 0;
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ===================
// ⭐ ОТЗЫВЫ
// ===================
const addReviewBtn = document.getElementById("add-review");
const reviewsList = document.getElementById("reviews-list");

if (addReviewBtn) {
  addReviewBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("review-name");
    const textInput = document.getElementById("review-text");

    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name || !text) {
      alert("Заполните имя и отзыв!");
      return;
    }

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "rewiev";

    reviewDiv.innerHTML = `
      <h2>${name}</h2>
      <p>${text}</p>
      <button class="delete-btn">Удалить</button>
    `;

    reviewDiv.querySelector(".delete-btn").addEventListener("click", () => {
      reviewDiv.remove();
    });

    reviewsList.appendChild(reviewDiv);

    nameInput.value = "";
    textInput.value = "";
  });
}
