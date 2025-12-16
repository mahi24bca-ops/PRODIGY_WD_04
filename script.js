document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  alert(`Thank you ${name}, your message has been submitted!`);

  this.reset();
});
