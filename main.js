const btn = document.querySelector('.open')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')

btn.onclick = function () {
  popup.classList.add('active')
}

close.onclick = function () {
  popup.classList.remove('active')
}

btn.onclick = function () {
  popup.classList.add('active')
}

var confettiSettings = { target: 'my-canvas' }
var confetti = new ConfettiGenerator(confettiSettings)
confetti.render()
