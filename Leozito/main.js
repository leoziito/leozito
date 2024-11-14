const movies = [
  { title: "Comédia 1", genre: "Comédia", description: "Uma ótima comédia.", image: "comedia1.jpg" },
  { title: "Terror 1", genre: "Terror", description: "Um filme assustador.", image: "terror1.jpg" },
  { title: "Drama 1", genre: "Drama", description: "Um drama envolvente.", image: "drama1.jpg" },
  { title: "Ação 1", genre: "Ação", description: "Um filme cheio de ação.", image: "acao1.jpg" }
];

const series = [
  { title: "Série Comédia", genre: "Comédia", description: "Uma série divertida.", image: "serie_comedia.jpg" },
  { title: "Série Terror", genre: "Terror", description: "Uma série assustadora.", image: "serie_terror.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
  loadContent(movies, "filmes-grid");
  loadContent(series, "series-grid");

  document.getElementById('search').addEventListener('input', searchContent);
});

function loadContent(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.genre}</p>
        `;
    card.addEventListener('click', () => showModal(item));
    container.appendChild(card);
  });
}

function searchContent(event) {
  const query = event.target.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
  const filteredSeries = series.filter(serie => serie.title.toLowerCase().includes(query));

  loadContent(filteredMovies, "filmes-grid");
  loadContent(filteredSeries, "series-grid");
}

function filterGenre(genre) {
  const filteredMovies = movies.filter(movie => movie.genre === genre);
  const filteredSeries = series.filter(serie => serie.genre === genre);

  loadContent(filteredMovies, "filmes-grid");
  loadContent(filteredSeries, "series-grid");
}

function showModal(item) {
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-description').textContent = item.description;
  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rating span').forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-rating');
      // Salvar a avaliação - pode ser em um banco de dados ou localStorage para esta simulação.
      alert(`Avaliação registrada: ${rating} estrelas`);
    });
  });
});
const destaques = [
  { title: "Filme em Destaque", genre: "Drama", description: "Um filme emocionante.", image: "destaque1.jpg" }
];

const lancamentos = [
  { title: "Novo Filme", genre: "Ação", description: "Um filme de ação recente.", image: "lancamento1.jpg" }
];

loadContent(destaques, "destaques-grid");
loadContent(lancamentos, "lancamentos-grid");
function showModal(item) {
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-description').textContent = item.description;
  document.getElementById('modal-image').src = item.image;

  // Recomendações baseadas em gênero
  const recommendations = movies.concat(series).filter(content => content.genre === item.genre && content.title !== item.title);
  const recommendationsDiv = document.getElementById('modal-recommendations');
  recommendationsDiv.innerHTML = recommendations.map(rec => `<p>${rec.title}</p>`).join('');

  document.getElementById('modal').style.display = 'block';
}
let favoritos = [];

function toggleFavorito(item) {
  if (favoritos.includes(item.title)) {
    favoritos = favoritos.filter(fav => fav !== item.title);
    alert(`${item.title} removido dos favoritos`);
  } else {
    favoritos.push(item.title);
    alert(`${item.title} adicionado aos favoritos`);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function loadFavorites() {
  favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(theme === "light" ? "light-mode" : "dark-mode");
});function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(theme === "light" ? "light-mode" : "dark-mode");
});

