console.log("Popping up...");

function PopUpOpen()
{
    var x = document.getElementById("navigation");
    if (x.classList.contains("open")) {
        x.classList.remove("open");
    }
    console.log("Download clicked!");
    var y = document.getElementById("downloadPopUp");
    if (y.classList.contains("hide")) {
        y.classList.remove("hide");
        y.classList.add("show");
    } else {
        y.classList.add("show");
    }
}

function PopUpClose()
{
    console.log("Download clicked!");
    var y = document.getElementById("downloadPopUp");
    if (y.classList.contains("show")) {
        y.classList.remove("show");
        y.classList.add("hide");
    } else {
        y.classList.add("hide");
    }
}

function PopUpToggle()
{
    var y = document.getElementById("downloadPopUp");
    if (y.classList.contains("show")) {
        PopUpClose();
    } else {
        PopUpOpen();
    }
}