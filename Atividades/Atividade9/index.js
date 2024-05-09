const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

bmiForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  const bmi = calculateBMI(height, weight);
  const bmiCategory = getBMICategory(bmi);

  const message = `Seu IMC é ${bmi.toFixed(2)}. Classificação: ${bmiCategory}`;

  resultDiv.textContent = message;
});

function calculateBMI(height, weight) {
  return weight / (height * height);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Magreza";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Sobrepeso";
  } else if (bmi >= 30 && bmi < 40) {
    return "Obesidade";
  } else {
    return "Obesidade Grave";
  }
}
