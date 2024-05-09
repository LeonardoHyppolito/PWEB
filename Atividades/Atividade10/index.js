document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMaiorNumero").addEventListener("click", mostrarMaiorNumero);
    document.getElementById("btnOrdemCrescente").addEventListener("click", mostrarOrdemCrescente);
    document.getElementById("btnPalindromo").addEventListener("click", mostrarPalindromo);
    document.getElementById("btnTipoTriangulo").addEventListener("click", mostrarTipoTriangulo);
});

function mostrarMaiorNumero() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const maior = maiorNumero(num1, num2, num3);
    document.getElementById('resultadoMaiorNumero').textContent = `O maior número é: ${maior}`;
}

function mostrarOrdemCrescente() {
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const numC = parseFloat(document.getElementById('numC').value);

    const ordem = ordemCrescente(numA, numB, numC);
    document.getElementById('resultadoOrdemCrescente').textContent = `Números em ordem crescente: ${ordem.join(', ')}`;
}

function mostrarPalindromo() {
    const str = document.getElementById('str').value;

    const palindromo = ehPalindromo(str);
    if (palindromo) {
        document.getElementById('resultadoPalindromo').textContent = `A string "${str}" é um palíndromo.`;
    } else {
        document.getElementById('resultadoPalindromo').textContent = `A string "${str}" não é um palíndromo.`;
    }
}

function mostrarTipoTriangulo() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const tipo = tipoTriangulo(a, b, c);
    document.getElementById('resultadoTipoTriangulo').textContent = tipo;
}

function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordemCrescente(num1, num2, num3) {
    return [num1, num2, num3].sort((a, b) => a - b);
}

function ehPalindromo(str) {
    const cleanStr = str.replace(/[^A-Za-z]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function tipoTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Os lados do triângulo devem ter valores positivos.";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Esses valores não formam um triângulo.";
    }
    if (a === b && b === c) {
        return "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}
