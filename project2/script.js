function calcular() {
  let text = document.getElementById("textarea").value;
  let result = text.split(" ").length;

  document.getElementById("resultado").innerHTML = result + "palavras";
}
