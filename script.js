let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("cartTotal").innerText = total;

  const items = document.getElementById("cartItems");
  items.innerHTML = cart.map(item => `
    <div>${item.name} — $${item.price}</div>
  `).join("");

  document.getElementById("cartDrawer").classList.add("open");
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}
