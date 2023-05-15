const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckPhrase = screen2.querySelector("h2")
const cookie = document.querySelector(".screen1 img")
const resetButton = document.querySelector(".screen2 button")
let randomNumber

cookie.addEventListener('click', chooseLuck)
resetButton.addEventListener('click', screenSwap)


let luckPhrases = ["A vida trará coisas boas se tiver paciência.","Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.","Não compense na ira o que lhe falta na razão.","Defeitos e virtudes são apenas dois lados da mesma moeda.","A maior de todas as torres começa no solo.","Não há que ser forte. Há que ser flexível.","Se alguém está tão cansado que não possa te dar um sorriso,deixa-lhe o teu.","Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?","Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.","A juventude não é uma época da vida, é um estado de espírito.","Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."]

// Funções

function chooseLuck() {
  randomNumber = Math.round(Math.random() * 10)
  let phraseTemp = luckPhrases[randomNumber]

  luckPhrase.innerText = phraseTemp

  screenSwap()
}

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
