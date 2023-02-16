let user = "wesley.fern1@gmail.com";
let password = "obrigado";

function checkUser() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  if (user == email && password == senha) {
    document.location.href = "login.html";
  } else {
    alert("Falha na autenticação");
    document.getElementById("forget").style.display = "flex";
  }
}
