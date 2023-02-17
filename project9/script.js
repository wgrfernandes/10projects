const api = "https://digimon-api.vercel.app/api/digimon";

window.onload = function () {
  fetch(api)
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let digimon = `  
        <div id="digimon">
            <img src="${data[i].img}" />
            <p>${data[i].name}</p>
            <p>${data[i].level}</p>
        </div>`;

        document.getElementById("digimons").innerHTML += digimon;
      }
    });
};
