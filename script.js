document.addEventListener("DOMContentLoaded", function() {
  var contactsButton = document.getElementById("contacts");

  contactsButton.addEventListener("click", function() {
    this.classList.add("clicked");
    window.location.href = "Contacts.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var contactsButton = document.getElementById("Krizhanovsky");

  contactsButton.addEventListener("click", function() {
    this.classList.add("clicked");
    window.location.href = "1920-1930/Krizhanovsky.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var contactsButton = document.getElementById("Rabinovich");

  contactsButton.addEventListener("click", function() {
    this.classList.add("clicked");
    window.location.href = "1920-1930/Rabinovich.html";
  });
});