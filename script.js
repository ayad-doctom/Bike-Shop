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

  var subject = "رسالة جديدة من الموقع";
  var body =
    "الاسم: " + name + "\n" +
    "الهاتف: " + phone + "\n\n" +
    "الرسالة:\n" + message;
<h2>تواصل معنا عبر واتساب</h2>

<input type="text" id="name" placeholder="الاسم الكامل"><br><br>
<input type="tel" id="phone" placeholder="رقم الهاتف"><br><br>
<textarea id="message" placeholder="الرسالة"></textarea><br><br>

<button onclick="sendWhatsApp()">إرسال عبر واتساب</button>                                                                      <button onclick="sendEmail()">إرسال عبر الإيميل</button>                                                                                  // لكل منتج:
<button onclick="buyProduct('دراجة نارية', 4500)">اشترِ الآن</button>

<script>
function buyProduct(productName, price) {
    var whatsappMessage = "أريد شراء المنتج:\n" +
                         "📦 المنتج: " + productName + "\n" +
                         "💰 السعر: " + price + " درهم\n" +
                         "---\n" +
                         "الرجاء التواصل معي لاستكمال الطلب";
    
    window.open("https://wa.me/212642487482?text=" + encodeURIComponent(whatsappMessage));
}
</script>
  window.location.href =
    "mailto:" + email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
}
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
// لكل منتج:
<button onclick="buyProduct('دراجة نارية', 4500)">اشترِ الآن</button>

<script>
function buyProduct(productName, price) {
    var whatsappMessage = "أريد شراء المنتج:\n" +
                         "📦 المنتج: " + productName + "\n" +
                         "💰 السعر: " + price + " درهم\n" +
                         "---\n" +
                         "الرجاء التواصل معي لاستكمال الطلب";
    
    window.open("https://wa.me/212642487482?text=" + encodeURIComponent(whatsappMessage));
}
</script>

// لكل منتج:
<button onclick="buyProduct('دراجة نارية', 4500)">اشترِ الآن</button>

<script>
function buyProduct(productName, price) {
    var whatsappMessage = "أريد شراء المنتج:\n" +
                         "📦 المنتج: " + productName + "\n" +
                         "💰 السعر: " + price + " درهم\n" +
                         "---\n" +
                         "الرجاء التواصل معي لاستكمال الطلب";
    
    window.open("https://wa.me/212642487482?text=" + encodeURIComponent(whatsappMessage));
}
</script>
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully!");
  clearCart();
});
function filterProducts(keyword) {
  document.querySelectorAll(".product").forEach(p => {
    p.style.display = p.innerText.toLowerCase().includes(keyword.toLowerCase())
      ? "block"
      : "none";
  });
}
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input, textarea");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill all fields");
      return;
    }
  }

  alert("Order placed successfully!");
  clearCart();
});
