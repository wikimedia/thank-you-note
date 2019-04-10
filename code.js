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
  var body = 'Hey you, worker bee!<br /><br />Somebody wants to show you are appreciated and are thanking you for ';
  body += '<b>' + reason + '</b>.<br /><br />Keep up the good work!<br />';
  GmailApp.sendEmail(recipient, 'You have a thank you note', '', {htmlBody: body, noReply: true, name: 'Secret Admirer'});
}

