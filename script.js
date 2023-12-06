//A função insert() recebe um número adiciona esse número a da tela da calculadora, o conteúdo da tela é representado pelo elemento HTML com a class dele.
function insert(num) {
  //Será adicionado um número a mais ou sinal.
  document.querySelector(".tela").innerHTML += num;
}
// Vai apagar os números selecionados da calculadora.
function clean() {
  document.querySelector(".tela").innerHTML = "";
}
function Voltar() {
  // A função back() remove o último número do conteúdo da tela da calculadora.
  let tela = document.querySelector(".tela").innerHTML;
  document.querySelector(".tela").innerHTML = tela.substring(
    0,
    tela.length - 1
  );
}
  //A função calcular() calcula o resultado da expressão matemática que está no conteúdo da tela da calculadora.
function calcular() {
  let tela = document.querySelector(".tela").innerHTML;
  // Se tiver comando na tela ele era executar.
  if (tela) {
    document.querySelector(".tela").innerHTML = eval(tela);
    // Passara para a tela o ressutado.
  } else {
    // Se nenhuma dos requesitos acima forem atendido o progama avisara que não a comando.
    document.querySelector(".tela").innerHTML = "Sem comando...";
  }
}
