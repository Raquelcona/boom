// Obtener los elementos del HTML 
const userInput = document.getElementById('userInput');
const countdownDisplay = document.getElementById('countdown');
const resultDisplay = document.getElementById('result');
const restartButton = document.getElementById('restart');

// número aleatorio entre 1 y 3
function generarNumeroAleatorio() {
  return Math.ceil(Math.random() * 3);
}

// niciar la cuenta atrás
function iniciarCuentaAtras(segundos) {
  let contador = segundos;
  const intervalo = setInterval(() => {
    countdownDisplay.textContent = contador; 
    contador--;

    if (contador < 0) {
      clearInterval(intervalo); 
    }
  }, 1000); 
}

//  para comprobar el resultado y mostrar el mensaje
function comprobarResultado(numeroUsuario, numeroAleatorio) {
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 3) {
    resultDisplay.textContent = "Por favor, introduce un número entre 1 y 3.";
  } else if (numeroUsuario === numeroAleatorio) {
    resultDisplay.textContent = `¡Has salvado el mundo! El número era ${numeroAleatorio}`;
  } else {
    resultDisplay.textContent = `La bomba ha estallado. El número era ${numeroAleatorio}`;
  }
}

// iniciar el juego
function startGame() {
  const numeroAleatorio = generarNumeroAleatorio(); 
  iniciarCuentaAtras(5); 
  const numeroUsuario = parseInt(userInput.value);
  comprobarResultado(numeroUsuario, numeroAleatorio);
}

// Iniciar el juego 
startGame();

// Reiniciar el juego
restartButton.addEventListener('click', () => {
  countdownDisplay.textContent = '';
  resultDisplay.textContent = '';
  userInput.value = '';
  startGame();
});