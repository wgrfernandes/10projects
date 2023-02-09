let button = document.getElementById("button");
let dark_theme = false;

function change_background() {
  if (dark_theme == false) {
    dark_theme = true;
    document.body.style.background = "white";
    button.style.background = "black";
    button.style.color = "white";
  } else {
    dark_theme = false;
    document.body.style.background = "black";
    button.style.background = "white";
    button.style.color = "black";
  }
}
