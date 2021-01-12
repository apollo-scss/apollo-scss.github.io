// Check window state end if main navigation should be visible,
// this is for desktops mainly
window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 576px)").matches) {
      var x = document.getElementById("navigation");
      x.classList.add("show");
  } else {
      var x = document.getElementById("navigation");
      x.classList.remove("show");
  }
})

function Hamburger() {
  var x = document.getElementById("navigation");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    x.classList.add("show");
  }
}
