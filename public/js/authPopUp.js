var checkId = document.getElementById("authPop");
if (checkId) {
  $("#modal-1").toggleClass("md-show"); //you can list several class names
}
$("#md-close").on("click", function (e) {
  $("#modal-1").toggleClass("md-show"); //you can list several class names
  e.preventDefault();
});
