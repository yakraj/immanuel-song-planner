function toggleMobileNav() {
  var checkBox = document.getElementById("checkbox");
  var navwindow = document.querySelector(".desktop-left-side");

  if (checkBox.checked == true) {
    navwindow.style.display = "block";
  } else {
    navwindow.style.display = "none";
  }
}
