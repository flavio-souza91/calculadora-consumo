const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
  precoCombustivel: document.querySelector("#precoCombustivel"),
};

const elemento = {
  formulario: document.querySelector("form"),
  paragrafo: document.querySelector("p"),
};

const veiculo = {
  modelo: "Argo",
  consumoMedio: 8.5,
};

const viagem = {
  velocidadeMedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

const combustivel = {
  tipo: "",
  preco_combustivel: "",
};

input.combustivel.forEach((radio) => {
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularConsumo();
});

function calcularConsumo() {
  //VARIAVEIS PARA CAPTURAR O VALOR DA HORA E MINUTO
  viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  //CAPTURA O VALOR DO CONSUMO MÉDIO DIGITADO PELO USUÁRIO
  veiculo.consumoMedio = input.consumo.value;

  // MÉTODO (SLICE) PARA CORTAR O SIMBOLO ":" DA HORA E MINUTO, SEPARANDO EM VARIAVEIS PRÓPRIAS
  let hora = +viagem.duracao.slice(0, 2); //usar o + para transformar string em numero
  let minuto = Number(viagem.duracao.slice(3)); // usar number () para transformar string em numero

  // FORMULA PARA CALCULAR A DISTÂNCIA PERCORRIDA PELO USUÁRIO
  viagem.percurso = (viagem.velocidadeMedia * ((hora * 60 + minuto) / 60)).toFixed(1)

  // if(combustivel.tipo.toLowerCase() === "etanol"){
    // viagem.percurso = (viagem.percurso - ((viagem.percurso * 0,3) *100))
  // }

  //CALCULO DO CONSUMO EM LITROS GASTOS NA VIAGEM
  viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio;
  
  // CALCULO PARA SABER O CUSTO EM REAIS (R$) DE ACORDO COM CONSUMO EM LITROS
  combustivel.preco_combustivel = +input.precoCombustivel.value
  viagem.custoEmReais = viagem.consumoLitros * combustivel.preco_combustivel

  elemento.paragrafo.innerText = (`A distância total da viagem é de: ${viagem.percurso.replace(".", ",") +' KM'} 
  e o consumo total foi de: ${viagem.consumoLitros.toFixed(1).replace(".", ",")} Litros, 
  e o valor total da viagem foi de: ${viagem.custoEmReais.toLocaleString("pt-BR", {style: "currency",currency: "BRL",})}.`)}