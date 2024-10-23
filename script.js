const key = "00c17ff67730c7f89019a7c0bb3900ed"; // Chave da API OpenWeather

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Clima em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.round(dados.main.temp) + "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  console.log(dados);
  colocarDadosNaTela(dados);
}

// Atualiza a imagem de fundo com uma imagem específica
function atualizarImagemFundo() {
  const imageUrl =
    "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg"; // URL da imagem que você quer usar
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover"; // Garante que a imagem cubra todo o fundo
  document.body.style.backgroundPosition = "center"; // Centraliza a imagem
  document.body.style.backgroundRepeat = "no-repeat"; // Não repete a imagem
}

// Chame a função assim que a página carregar
window.onload = () => {
  atualizarImagemFundo(); // Atualiza a imagem de fundo ao carregar a página
};

// Adiciona um evento de escuta para o campo de entrada
document
  .querySelector(".input-cidade")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      cliqueiNoBotao(); // Chama a função de busca de cidade
    }
  });

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value; // Pega o valor do input
  buscarCidade(cidade);
}
