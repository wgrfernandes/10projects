let number_img = 1;

function img_changer_add() {
  let img = document.getElementById("image");

  if (number_img < 3) {
    number_img += 1;
  } else {
    number_img = 3;
  }

  img.src = "assets/" + number_img + ".jpg";
}

function img_changer_sub() {
  let img = document.getElementById("image");

  if (number_img > 1) {
    number_img -= 1;
  } else {
    number_img = 1;
  }

  img.src = "assets/" + number_img + ".jpg";
}
