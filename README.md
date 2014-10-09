# nodemailer-sendgrid-transport

This module is a transport plugin for [Nodemailer](https://github.com/andris9/Nodemailer) that makes it possible to send through [SendGrid's Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)!

## Usage
Install via npm.

	npm install nodemailer-sendgrid-transport

Require the module and initialize it with your SendGrid credentials.

```javascript
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
	auth: {
		api_user: 'SENDGRID_USERNAME',
		api_key: 'SENDGRID_PASSWORD'
	}
}
	
var mailer = nodemailer.createTransport(sgTransport(options));
```

Note: We suggest storing your SendGrid username and password as enviroment variables.

Create an email and send it off!

```javascript
var email = {
	to: ['joe@foo.com', 'mike@bar.com'],
	from: 'roger@tacos.com',
	subject: 'Hi there',
	text: 'Awesome sauce',
	html: '<b>Awesome sauce</b>'
};

mailer.sendMail(email, function(err, res) {
	if (err) { 
		console.log(err) 
	}
	console.log(res);
});
```
## License
Licensed under the MIT License.

