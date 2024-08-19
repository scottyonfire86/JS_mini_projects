let counter = 0;

const counterText = document.querySelector("#counter-text");
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      counter--;
    }
    else if (styles.contains('increase')) {
      counter++;
    }
    else {
      counter = 0;
    }
    if (counter > 0) {
      counterText.style.color = '#00FF00';
    }
    if (counter < 0) {
      counterText.style.color = '#FF0000';
    }
    if (counter === 0) {
      counterText.style.color = '#000000';
    }
    counterText.textContent = counter;
  });
});