const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
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
  precoEtanol: 3.899,
  precoGasolina: 5.999,
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
  console.log(veiculo.consumoMedio);

  // MÉTODO (SLICE) PARA CORTAR O SIMBOLO ":" DA HORA E MINUTO, SEPARANDO EM VARIAVEIS PRÓPRIAS
  let hora = +viagem.duracao.slice(0, 2); //usar o + para transformar string em numero
  let minuto = Number(viagem.duracao.slice(3)); // usar number () para transformar string em numero

  // FORMULA PARA CALCULAR A DISTÂNCIA PERCORRIDA PELO USUÁRIO
  viagem.percurso = (viagem.velocidadeMedia * ((hora * 60 + minuto) / 60)).toFixed(1)

  // CONDIÇÃO PARA REDUZIR O VALOR DA DISTÂNCIA TOTAL CASO O USUÁRIO UTILIZE ETANOL
//   if (combustivel.tipo.toLocaleLowerCase() === "etanol"){
//     viagem.percurso = viagem.percurso - ((viagem.percurso * 0,3)*100)
//   console.log(viagem.percurso)
// }

  //MÉTODO (REPLACE) PARA SUBSTITUIR ". POR "," NA EXIBIÇÃO DA DISTÂNCIA TOTAL
  console.log(viagem.percurso.replace(".", ",") + " KM");

  //CALCULO DO CONSUMO EM LITROS GASTOS NA VIAGEM
  viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio;
  console.log(viagem.consumoLitros);

  // CALCULO PARA SABER O CUSTO EM REAIS (R$) DE ACORDO COM CONSUMO EM LITROS

  if (combustivel.tipo.toLowerCase() === "etanol") {
    viagem.custoEmReais = viagem.consumoLitros * combustivel.precoEtanol;
    
    //MÉTODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
    console.log(`Custo do Etanol: ${viagem.custoEmReais.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  } else {
    viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina;
    
    //MÉTODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
    console.log(`Custo da Gasolina: ${viagem.custoEmReais.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  }
  elemento.paragrafo.innerText = (`A distância total da viagem é de: ${viagem.percurso.replace(".", ",") + " KM"} 
  e o consumo total foi de: ${viagem.consumoLitros.toFixed(1).replace(".", ",")} Litros, 
  e o valor total da viagem foi de: ${viagem.custoEmReais.toLocaleString("pt-BR", {style: "currency",currency: "BRL",})}.`)
}