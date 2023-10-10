alert("Hora de jogar!");
alert("Adivinhe o número, digite de 1 a 10!");

var digiteUmNumero = prompt("Digite sua aposta:");

function sorteia() {
  return Math.round(Math.random() * 10);
}

if (digiteUmNumero == sorteia) {
  alert("Você ACERTOU!");
} else {
  alert("Você ERROU!!");
  alert("O número secreto era: " + sorteia());
}
