//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img:first").addClass("tasty");
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
    return false;
  });
}

function pressIt() {
  $("input").on("keydown", function(key) {
    if (parseInt(key.which) === 71) {
      alert("You just pressed G.");
    }
  });
}

$(document).ready(function(){

// call functions here

});
