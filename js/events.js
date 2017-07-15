//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(e) {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('form input#typing').on('keydown', function(e) {
    if(e.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
