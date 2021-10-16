var menuButton = document.querySelector(".menu-button");
var content = document.getElementById("content");
menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  var parent = document.querySelector(".menu-container");
  if (parent.classList.contains("open")) {
    parent.classList.remove("open");
    content.style.display = "none";
  } else {
    parent.classList.add("open");
    content.style.display = "block";
  }
});
