
function submitSelect() {
	var form = $( 'form' );

	form.on( 'keypress', function( event ) {
		var tgt = $( event.target );

		// Return if element in focus is a textarea
		if( event.target.nodeName === 'TEXTAREA' ) return;

		// Return if anything but the return key is hit
		if ( event.which !== 13 ) return;

		if ( tgt.attr( 'data-submit-with' ) !== undefined ) {
			var buttonAttr = tgt.attr( 'data-submit-with' );

			form.find( 'input[data-btn=' + buttonAttr + ']' ).trigger( 'click' );
		}

		if ( $( event.target ).attr( 'type' ) !== 'submit' ) {
			event.preventDefault();
			$( event.target ).trigger( 'click' );
		}
	});
}