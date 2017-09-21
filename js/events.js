//define functions here
getIt = () => {
  $('p').on('click', () => {
    alert("Hey!");
});
}

frameIt = () => {
  $('img').on('load', () => {
    $('img').addClass('tasty');
});
}

pressIt = () => {
  $('form').on('keydown', (key) => {
    if (key.which == 71 ) {
      alert('g was pressed');
    }
  });
}

submitIt = () => {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.');
  });

}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
