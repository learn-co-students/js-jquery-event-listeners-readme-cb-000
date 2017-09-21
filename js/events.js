function getIt() {
	$('p').on('click', function(){
		alert("Hey!")
	})
}

function frameIt() {
	$('img').addClass('tasty')
}

function pressIt() {
	$(document).on('keydown', function(e) {
		if (e.which == 71) {
			alert("G Key!")
		}
	})
}

function submitIt() {
	$('form').on('submit', function(){
		alert('Your form is going to be submitted now.')
	})
}

$(document).ready(function(){

	getIt()
	frameIt()
	pressIt()
	submitIt()

});
