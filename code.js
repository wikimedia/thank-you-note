/**
 * This code is the invoked by the trigger when a new form submission is made
 */
function onNewData(e) {
  if (!e || !e.namedValues) {
    return;
  }
  var vals = e.namedValues;
  var recipient = vals['Email of the person you want to send a thank you note to'][0];
  var reasons = vals['What do you want to thank them for?'];

  if ( Array.isArray( reasons ) ) {
	  // Bold the reasons specifically
	  reasons = reasons.map( function ( r ) {
		  return '<strong>' + r + '</strong>';
	  } );

	  // Add "and" before the last one
	  reasons[ reasons.length - 1 ] = 'and ' + reasons[ reasons.length - 1 ];

	  // Join it all with commas
	  reasons = reasons.join( ', ' );
  }

  var body = [
	  'Hey you, worker bee!',
	  '',
	  'Somebody wants to show you are appreciated and are thanking you for: ' + reasons,
	  '',
	  'Here\'s a cute image, just for you:',
	  getRandomCuteImage(),
	  '',
	  'Keep up the good work!',
	  ''
  ].join( '<br />' );

  if ( !recipient ) { return; }
  GmailApp.sendEmail(recipient, 'You have a thank you note', '', {htmlBody: body, noReply: true, name: 'Secret Admirer'});
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
 * @param  {string[]} arr Array of items
 * @return {string} Random item
 */
function getRandomItem( arr ) {
	return arr[ Math.floor( Math.random() * arr.length ) ];
}
