function inserir(numero) {
    var numeroero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeroero + numero;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function voltar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcula() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
function pull() {
}