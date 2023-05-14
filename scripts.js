const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector(".screen1 img")
const resetButton = document.querySelector(".screen2 button")

cookie.addEventListener('click', screenSwap)
resetButton.addEventListener('click', screenSwap)










// Funções

function screenSwap() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function iniciarAnimacao(imagem) {
  imagem.classList.add('imagem-vibrante');
  imagem.classList.add('vibrando');
}

function pararAnimacao(imagem) {
  imagem.classList.remove('imagem-vibrante');
  imagem.classList.remove('vibrando');
}
