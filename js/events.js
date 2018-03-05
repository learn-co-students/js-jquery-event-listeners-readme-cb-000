function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').keydown(function(e) {
    if (e.which == 70) alert('You\'ve selected the letter \'G\'');
  });
}

function submitIt() {
  $('form').on('submit', function {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

});
