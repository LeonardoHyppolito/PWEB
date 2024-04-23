
// Calculando a Média 
function calcularMedia() {
    // Js foi chamado, agora ele procura o que precisa no documento que chamou ele. getElementById
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibir o resultado na página
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "<h2>Resultado</h2>" +
        "<p>Nome do Aluno: " + nome + "</p>" +
        "<p>Média das Notas: " + media.toFixed(2) + "</p>";
}
