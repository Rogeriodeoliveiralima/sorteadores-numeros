
function sortear(){

  let quantidadeNumero = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if(isNaN(quantidadeNumero)|| quantidadeNumero <= 0){
    return alert('informe numero para pesquisa');
  }

  if(quantidadeNumero > (ate - de + 1)){
     alert('Campo de quantidade de ser menor ou igual ao intervalo, informado no campo de pesquisa!! ');
     return;
  }

  let numeroSorteado = [];
  let numero;

  for (let i = 1; i <= quantidadeNumero; i++){
    numero = obternumeroAleatorio(de, ate);

    while(numeroSorteado.includes(numero)){
      numero = obternumeroAleatorio(de, ate);
    }
    numeroSorteado.push(numero);
  }
  statusbotao();

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteado.sort()}</label>`;
}

function reiniciar(){
  document.getElementById('btn-reiniciar');
  resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  parseInt(document.getElementById('quantidade').value = 0);
  parseInt(document.getElementById('de').value = 0);
  parseInt(document.getElementById('ate').value = 0);
}

function statusbotao(){
  let botao = document.getElementById('btn-reiniciar');
  if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  }else{
    botao.classList.add('container__botao-desabilitado');
    botao.classList.remove('container__botao');
  }
}

function obternumeroAleatorio(min, max){
   return Math.floor(Math.random()* (max - min)+ min);
}