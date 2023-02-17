let movie_list = [
  {
    nome: "John Wick 1: De volta ao jogo",
    img: "https://2.bp.blogspot.com/-7d8nkuA4wV8/WKtqkBndxXI/AAAAAAABEig/cf81o7RZ068kf75ZHfUAEG1-7dBB2RpXQCLcB/s1600/jonhwic.jpg",
    trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
  },

  {
    nome: "John Wick 2: Um novo dia para matar",
    img: "https://m.media-amazon.com/images/I/51pIbVUwoHL._AC_SY550_.jpg",
    trailer: "https://www.youtube.com/watch?v=XGk2EfbD_Ps",
  },

  {
    nome: "John Wick 3: Parabellum",
    img: "https://musicart.xboxlive.com/7/261e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    trailer: "https://www.youtube.com/watch?v=CcQpYEcZXaU",
  },
];

window.onload = function () {
  for (let i = 0; i < movie_list.length; i++) {
    let movie = `<a href="${movie_list[i].trailer}">
  <div id="movie">
      <img
        src="${movie_list[i].img}"
      />
      <p>${movie_list[i].nome}</p>
    </div>
</a>
  `;
    document.getElementById("movies").innerHTML += movie;
  }
};
