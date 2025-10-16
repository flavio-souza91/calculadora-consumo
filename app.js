const veiculo = {
  modelo: "",
  consumoMedio: 8.5,
};
const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
};
const viagem = {
  velocidadeMedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

viagem.duracao = 9;
viagem.velocidadeMedia = 120;
viagem.percurso = viagem.velocidadeMedia * viagem.duracao;

viagem.consumoLitros = Math.round(viagem.percurso / veiculo.consumoMedio);

combustivel.tipo = 1;

if (combustivel.tipo === 0) {
  viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoEtanol).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
} else {
  viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoGasolina).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
}

console.log(viagem);
