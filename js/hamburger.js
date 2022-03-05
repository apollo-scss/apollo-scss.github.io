console.log("Flipping burgers...");
// Check window state end if main navigation should be visible,
// this is for desktops mainly
window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 576px)").matches) {
      var x = document.getElementById("navigation");
      x.classList.add("open");
  } else {
      var x = document.getElementById("navigation");
      x.classList.remove("open");
  }
})

function Hamburger() {
  console.log("Hamburger clicked!");
  var x = document.getElementById("navigation");
  if (x.classList.contains("open")) {
    x.classList.remove("open");
  } else {
    x.classList.add("open");
  }
}
