const key = "00c17ff67730c7f89019a7c0bb3900ed";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Clima em " + dados.name;
  // Arredonda a temperatura para o número inteiro mais próximo
  document.querySelector(".temp").innerHTML =
    Math.round(dados.main.temp) + "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  // Corrigido de 'scr' para 'src'
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

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value; // Pega o valor do input
  buscarCidade(cidade);
}
