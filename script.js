function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "212603943067"; 

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
