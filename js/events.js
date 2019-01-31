function getIt() {
  $("p").on("click", function(){
  alert ("Hey!")
  return
})
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  });
}


 function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You have pressed the G key")
    }
  });
}

 function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  });
}

// Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
//
// Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
//
// Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
