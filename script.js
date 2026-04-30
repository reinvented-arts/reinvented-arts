let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}
function renderCart() {
  const items = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");
  if (!cart.length) {
    items.innerHTML = "No items yet.";
    total.textContent = "0";
    return;
  }
  items.innerHTML = cart.map(item => `<div>${item.name} — $${item.price}</div>`).join("");
  total.textContent = cart.reduce((sum, item) => sum + item.price, 0);
}
