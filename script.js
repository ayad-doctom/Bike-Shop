let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartElement = document.getElementById("cart");
const totalElement = document.getElementById("total");

function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  cartElement.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartElement.appendChild(li);
  });

  totalElement.textContent = total;
}

renderCart();
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully!");
  clearCart();
});
function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "212642487482";

  var text =
    "الاسم: " + name + "%0A" +
    "الهاتف: " + phone + "%0A" +
    "الرسالة: " + message;

  var url = "https://wa.me/" + whatsappNumber + "?text=" + text;

  window.open(url, "_blank");
}
function sendEmail() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
 // بدلي الإيميل ديالك

  var subject = "رسالة جديدة من الموقع";
  var body =
    "الاسم: " + name + "\n" +
    "الهاتف: " + phone + "\n\n" +
    "الرسالة:\n" + message;

  window.location.href =
    "mailto:" + email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
}
