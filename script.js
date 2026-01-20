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

  var email = "ayadimotosgmail@g

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
  var email = "ayadimotosgmail.com"; /

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
// لكل منتج:
<button onclick="buyProduct('دراجة نارية', 4500)">اشترِ الآن</button>

<script>
function buyProduct(productName, price) {
    var whatsappMessage = "أريد شراء المنتج:\n" +
                         "📦 المنتج: " + productName + "\n" +
                         "💰 السعر: " + price + " درهم\n" +
                         "---\n" +
                         "الرجاء التواصل معي لاستكمال الطلب";
    
    window.open("https://wa.me/212603943067?text=" + encodeURIComponent(whatsappMessage));
}
</script>

