$(document).ready(function(){

//function name
function getIt() {
//'p' is the tag, click is the event
  $('p').on('click', function() {
//function of 'p' alerts 'hey!' when clicked
    alert('hey!')
  })
}

//function name
function frameIt() {
//image('img') is the tag, load is the event
  $('img').on('load' function() {
//function is adding the class 'tasty' to the image
    $('img').addClass('tasty')
  })
}

//function name
function pressit() {
//typing tag bc youre typing, keydown is the event
  $('#typing').on('keydown' function(g) {
//function if keydown on 'g'. 'g' corresponds to 71
//g.which = g was pressed for the event (keydown)
    if (g.which === 71) {
// alerting that user pressed 'g'
      alert("You pressed 'g'!")
    }
  })
}

//function
function submitIt() {
//form is the parent of submit on HTML page. form finds submit on HTML
  $('form').on('submit', function() {
//alerting for the submit function
    alert('Your form is going to be submitted now.')
  })
}


});
