//define functions here

function getIt () {
  $('p').on('click', function(event) {
    alert('Hey!')
  })
}


function frameIt () {
  $('img').on('load', function(event) {
    $(this).addClass( "tasty" );
  })
}

function pressIt () {
  $('form').on('keydown', function(event) {

    if (event.which == 71) {
      alert('G was pressed');

    }
})


}

function submitIt () {
  $('form').on('submit', function(event) {
    alert("Your form is going to be submitted now.")
  })
}



$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
