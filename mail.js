document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("h8nVl3ROujuytx51D");

  const form = document.getElementById("contactForm");

  if (!form) {
    console.log("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xkt6xzb",
      "template_m2s2fta",
      this
    )
    .then(() => {
      alert("Message sent 💌");
      form.reset();
    })
    .catch((err) => {
      console.log("Error:", err);
      alert("Failed ❌");
    });
  });

});