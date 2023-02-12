function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  let result = peso / (altura * altura);
  let final_result = result.toFixed(1);
  let status;

  if (final_result <= 18.5) {
    status = "\nAbaixo do peso ideal";
  } else if (18.5 < final_result <= 24.9) {
    status = "\nFaixa de peso ideal";
  } else if (24.9 < final_result <= 29.9) {
    status = "\nSobrepeso";
  } else if (29.9 < final_result <= 34.9) {
    status = "\nObesidade classe I";
  } else if (34.9 < final_result <= 39.9) {
    status = "\nObesidade classe II";
  } else if (39.9 < final_result) {
    status = "\nObesidade classe III";
  }

  document.getElementById("resultado").innerHTML =
    " O resultado é " + final_result + status;
}
