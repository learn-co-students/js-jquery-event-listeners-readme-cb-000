function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt(e) {
  if (e.which == 70) {alert('You\'ve selected the letter \'G\'')}
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

  $('p').on('click', getIt());

  $('img').on('load', frameIt());

  $('#typing').keydown(pressIt(e));

  $([type='submit']).on('submit', submitIt());

});
