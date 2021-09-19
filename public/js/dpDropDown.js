var menuButton = document.querySelector(".menu-button");
var content = document.getElementById("content");
menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  var parent = document.querySelector(".menu-container");
  if (parent.classList.contains("open")) {
    parent.classList.remove("open");
    console.log("close menu");
    content.style.display = "none";
  } else {
    console.log("open menu");
    parent.classList.add("open");
    content.style.display = "block";
  }
});
