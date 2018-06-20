//define functions here
function getIt() {
    $('p').on('click', () => {alert('Hey!')})
}

 function  frameIt() {
    $('img').on('load', () => {
        $('img').addClass('tasty')
    })
}
//l
 function  pressIt () {
    $('document').on('keydown', (key) => {
        if key == 'g' {
            alert('Hey!')
        }
    })
}

 function  submitIt () {
    $('form').on('submit', () => {alert("Your form is going to be submitted now.")})
}

$(document).ready(function(){

// call functions here
    getIt();
    submitIt();
    frameIt();
     pressIt();

});
