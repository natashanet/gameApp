//const statickaVrednost = 5;

var generiranaVrednost = Math.floor(Math.random() * 10) + 1;
var english = true;
var ishod;
var points = 0;

document.querySelector('.lang').addEventListener('click', function () {
  document.querySelector('.klik').textContent = 'Klikni me!';
  document.querySelector('p').textContent = 'Vnesi broj za promena';
  document.querySelector('h1').textContent = 'Pogodi go brojot';
  document.querySelector('.lang').textContent = 'Promeni jazik';
  document.querySelector('.outputValue').textContent = 'Pogodivte!';
  document.querySelector('.totalPoints').textContent = 'Vkupno poeni!';
  english = false;
});

document.querySelector('.klik').addEventListener('click', function () {
  const guess = Number(document.querySelector('.vnes').value);
  console.log(guess);

  if (guess === generiranaVrednost) {
    points++;
    if (english) {
      document.querySelector('.outputValue').textContent = 'Correct';
      document.querySelector('.totalPoints').textContent =
        'Total points:' + points;
    } else {
      document.querySelector('.outputValue').textContent = 'Tochno';
      document.querySelector('.totalPoints').textContent =
        'Vkupno poeni:' + points;
    }
    generiranaVrednost = Math.floor(Math.random() * 10) + 1;
  } else {
    if (english) {
      document.querySelector('.outputValue').textContent = 'Try again';
    } else {
      document.querySelector('.outputValue').textContent = 'Povtoren Obid!';
    }
  }
});
