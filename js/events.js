//define functions here
var getIt = () => {
  $('p').on('click', () => {
    alert('Ayy lmao')
  })
}

var frameIt = () => {
  $('img').addClass('tasty')
}

var pressIt = () => {
  $(document).on('keydown', key => {
    key.which === 71 ? alert("You're a lert!") : null
  })
}

var submitIt = () => {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(() => {
  getIt()
  frameIt()
  pressIt()
  submitIt()
})
