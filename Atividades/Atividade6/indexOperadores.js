// Agora que o HTML chamou o java script, é só fazer as contas. 

function calcularOperacoes() {
    // Captura dos valores dos campos de entrada input.
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    // Verifica se os campos foram preenchidos corretamente
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Realiza as operações matemáticas
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var produto = num1 * num2;
    
    // Verifica se o segundo número é zero para evitar divisão por zero
    var divisao = num2 !== 0 ? num1 / num2 : "Indefinida";

    // Calcula o resto da divisão utilizando o operador de módulo (%)
    var restoDivisao = num2 !== 0 ? num1 % num2 : "Indefinido";

    // Exibe os resultados
    alert("Soma: " + soma + "\n" +
          "Subtração: " + subtracao + "\n" +
          "Produto: " + produto + "\n" +
          "Divisão: " + divisao + "\n" +
          "Resto da divisão: " + restoDivisao);
}
