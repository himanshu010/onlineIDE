document.getElementById("password").addEventListener("change", function (e) {
  if (
    document.getElementById("password").value !=
    document.getElementById("cpassword").value
  ) {
    alert("Passwords don't match");
    document.getElementById("login").disabled = true;
  } else {
    document.getElementById("login").disabled = false;
  }
});
document.getElementById("cpassword").addEventListener("change", function (e) {
  if (
    document.getElementById("password").value !=
    document.getElementById("cpassword").value
  ) {
    alert("Passwords don't match");
    document.getElementById("login").disabled = true;
  } else {
    document.getElementById("login").disabled = false;
  }
});
