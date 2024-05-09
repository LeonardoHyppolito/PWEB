const surveyForm = document.getElementById('surveyForm');
const resultsDiv = document.getElementById('results');

let ages = [];
let opinions = [];
let femaleCount = 0;
let maleCount = 0;

surveyForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const opinion = parseInt(document.getElementById('opinion').value);

  ages.push(age);
  opinions.push(opinion);

  if (gender === 'female') {
    femaleCount++;
  } else {
    maleCount++;
  }

  calculateResults();
});

function calculateResults() {
  const totalParticipants = ages.length;

  const totalAge = ages.reduce((accumulator, current) => accumulator + current, 0);
  const averageAge = totalAge / totalParticipants;

  const oldestAge = Math.max(...ages);
  const youngestAge = Math.min(...ages);

  const poorOpinions = opinions.filter(opinion => opinion === 1).length;

  const goodOpinions = opinions.filter(opinion => opinion >= 3).length;
  const goodOpinionsPercentage = (goodOpinions / totalParticipants) * 100;

  document.getElementById('averageAge').textContent = averageAge.toFixed(2);
  document.getElementById('oldestAge').textContent = oldestAge;
  document.getElementById('youngestAge').textContent = youngestAge;
  document.getElementById('poorOpinions').textContent = poorOpinions;
  document.getElementById('goodOpinionsPercentage').textContent = goodOpinionsPercentage.toFixed(2);
  document.getElementById('femaleCount').textContent = femaleCount;
  document.getElementById('maleCount').textContent = maleCount;
}
