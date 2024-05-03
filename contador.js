let counter = 0;

function increaseCounter() {
  counter++;
  document.getElementById('counter').textContent = counter;
  redirectToAnotherPage();
}

function decreaseCounter() {
  counter--;
  document.getElementById('counter').textContent = counter;
  redirectToAnotherPage();
}

