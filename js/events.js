function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  });
};


function pressIt() {
  $('#typing').on('keydown', function(k) {
    if (k.which == 71) {
      alert("'G' was pressed!");
    };
  });
};


$(document).ready(function() {
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
