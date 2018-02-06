//define functions here

$(document).ready(function(){
});

function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('form').on("keydown", function(key){
    if (key.which === 71) {
      alert('G was pressed')
    }
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}
