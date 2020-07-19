$('.btn-console').click( () => {
	console.log('Yeah, you clicked me');
});


let consoleButtonTextChanged = 'Please click "Then try me" button again';
let consoleButtonTextOriginal = $('.btn-console').text();

let consoleButtonTextNow = consoleButtonTextOriginal;

$('.btn-change-previous').click( () => {
	
	if (consoleButtonTextChanged !== consoleButtonTextNow) {
		$('.btn-console').text(consoleButtonTextChanged);
		consoleButtonTextNow = $('.btn-console').text();
	} else {
		$('.btn-console').text(consoleButtonTextOriginal);
		consoleButtonTextNow = $('.btn-console').text();
	}
});

let initialText = $('.btn-change-background').text();
let bgInitialColor = $('.btn').css('background-color');
let bgChanged = false;
$('.btn-change-background').click( () => {

	if (bgChanged === false) {
		$('.btn').css('background-color', 'green');
		$('.btn-change-background').text('Oh, I like this!');
		bgChanged = true;
	} else {
		$('.btn').css('background-color', bgInitialColor);
		$('.btn-change-background').text(initialText);
		bgChanged = false;
	}
}); 


