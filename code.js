/**
 * This code is the invoked by the trigger when a new form submission is made
 */
function onNewData(e) {
	if (!e || !e.namedValues) {
	  return;
	}
	var vals = e.namedValues;
	var recipient = vals['What is the email of the person who you want to thank?'][0];
	var reasons = vals['For what do you want to thank them?'][0].split( ', ' );

	if ( !recipient ) { return; }

	// Bold the reasons specifically
	reasons = reasons.map( function ( r ) {
		return '<strong>' + r + '</strong>';
	} );

	// Add "and" before the last one
	var lastReason = reasons.pop();
	if ( reasons.length > 0 ) {
		lastReason = ' and ' + lastReason;
	}

	// Join it all with commas
	reasons = reasons.join( ', ' ) + lastReason;

	var body = [
		'Hey you, worker bee!',
		'',
		'A colleague wants to show you are appreciated, and in particular they are thanking you for: ' + reasons,
		'',
		'Here\'s a cute image, just for you:',
		getRandomCuteImage(),
		'',
		'Keep up the good work!',
		'', '',
		'P.S. Want to thank someone yourself? Use <a href="https://forms.gle/keTMLhXnCfVjfnn8A">this form</a>'
	].join( '<br />' );

	GmailApp.sendEmail(recipient, 'You have a new staff thank you note', '', {htmlBody: body, noReply: true, name: 'Secret Admirer'});
}

/**
 * Get a random cute image from Commons
 *
 * @return {string} Random image html tag
 */
function getRandomCuteImage() {
	img = getRandomItem( Data.images );

	return [
		'<div style="text-align:center;">',
		'<img src="' + img.src + '" title="Source: ' + img.url + '" style="max-height: 500px; width: auto;" />',
		'<small>Attribution: ' + img.attrib + '</small>',
		'</div>'
	].join( '<br />' );
}

/* Helper functions */

/**
 * Get a random object from within an array
 *
 * @private
 * @param {string[]} arr Array of items
 * @return {string} Random item
 */
function getRandomItem( arr ) {
	return arr[ Math.floor( Math.random() * arr.length ) ];
}
