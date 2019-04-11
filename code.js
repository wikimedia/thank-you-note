/**
 * This code is the invoked by the trigger when a new form submission is made
 */
function onNewData(e) {
  if (!e || !e.namedValues) {
    return;
  }
  var vals = e.namedValues;
  var recipient = vals['Email of the person you want to send a thank you note to'][0];
  var reason = vals['What do you want to thank them for?'][0];
  var body = [
	  'Hey you, worker bee!',
	  '',
	  'Somebody wants to show you are appreciated and are thanking you for <b>' + reason + '</b>',
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
	var images = [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/768px-Sleeping_cat_on_her_back.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Six_weeks_old_cat_%28aka%29.jpg/640px-Six_weeks_old_cat_%28aka%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/499px-Tabby_cat_with_blue_eyes-3336579.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Siberian_black_tabby_blotched_cat_04.jpg/576px-Siberian_black_tabby_blotched_cat_04.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Siberian_black_tabby_blotched_cat_01.jpg/512px-Siberian_black_tabby_blotched_cat_01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Baby_Goat_in_Margarita_Island%2C_Venezuela.jpg/640px-Baby_Goat_in_Margarita_Island%2C_Venezuela.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baby_fur_seal%2C_South_Georgia.jpg/640px-Baby_fur_seal%2C_South_Georgia.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Baby_Golden_Monkey_%2873313623%29.jpeg/640px-Baby_Golden_Monkey_%2873313623%29.jpeg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Baby_Geese_01.jpg/640px-Baby_Geese_01.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Baby_dwergnijlpaardje_Flory_%284022911547%29.jpg/640px-Baby_dwergnijlpaardje_Flory_%284022911547%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Baby_squirrel_%28orphaned_male%29_sleeping_in_human_hand.jpg/595px-Baby_squirrel_%28orphaned_male%29_sleeping_in_human_hand.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bobcat-Texas-9135.jpg/576px-Bobcat-Texas-9135.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Happy_Kits%21_%287537056436%29.jpg/600px-Happy_Kits%21_%287537056436%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Make_Room_for_Me%21_%287537056218%29.jpg/640px-Make_Room_for_Me%21_%287537056218%29.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Turtle_mazunte_oaxaca_mexico_claudio_giovenzana_2010.jpg/640px-Turtle_mazunte_oaxaca_mexico_claudio_giovenzana_2010.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Primitive_family_photo.jpg/640px-Primitive_family_photo.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Phodopus_roborovskii_8_days_old_03.jpg/640px-Phodopus_roborovskii_8_days_old_03.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Monkeys_yawn.jpg/640px-Monkeys_yawn.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HanRenne.JPG/640px-HanRenne.JPG',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lulabi_%28257485715%29.jpeg/768px-Lulabi_%28257485715%29.jpeg',
			'https://upload.wikimedia.org/wikipedia/commons/6/6f/Hoffmann%2C_Hans_-_A_Wild_Boar_Piglet_-_1578.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Rehkitz2.jpg/640px-Rehkitz2.jpg'
		],
		url = getRandomItem( images );

	return '<img src="' + url + '" title="Source: ' + url + '" height=400 />';
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
