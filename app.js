function sortear(){
 let quantidade = document.getElementById('sortear()').value;
 let de = document.getElementById('de').value;
 let ate = document.getElementById('ate').value;

 if(quantidade >= ((ate - de) + 1 ) || quantidade <= 0){
  return alert('Quantidade não pode ser superior ou inferior a quantidade de pesquisa!!')
 }

 let numeroSorteado = [];
 let numero = 0;
 
 for(let i = 0; i < quantidade; i++){
  numero = pegarNumeroAleatorio(de, ate);
  while(numeroSorteado.includes(numero)){
    numero = pegarNumeroAleatorio(de, ate);
  }
    numeroSorteado.push(numero);
 }
 statusBotao();

 let resultado = document.getElementById('resultado');
 resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados:  ${numeroSorteado.sort()}</label>`

}

function pegarNumeroAleatorio(min, max){
  return Math.floor(Math.random()*((max - min) + 1));
}

function statusBotao(){
  let botao = document.getElementById('btn-reiniciar');
  if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  }else{
    botao.classList.add('container__botao-desabilitado');
    botao.classList.remove('container__botao');
  }
 
  

}
function reiniciar(){
  resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  document.getElementById('sortear()').value = 0;
  document.getElementById('de').value = 0;
  document.getElementById('ate').value = 0;
  statusBotao();
}