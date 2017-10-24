![SendGrid Logo](https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)

[![BuildStatus](https://travis-ci.org/sendgrid/nodemailer-sendgrid-transport.svg?branch=master)](https://travis-ci.org/sendgrid/nodemailer-sendgrid-transport)
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![NPM version](https://badge.fury.io/js/nodemailer-sendgrid-transport.svg)](http://badge.fury.io/js/nodemailer-sendgrid-transport)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![GitHub contributors](https://img.shields.io/github/contributors/sendgrid/nodemailer-sendgrid-transport.svg)](https://github.com/sendgrid/nodemailer-sendgrid-transport/graphs/contributors)

# Important Announcement

**As of June 1, 2016, SendGrid will no longer support this library.**

Please direct any questions to the [Developer Experience](mailto:dx@sendgrid.com) team.

# nodemailer-sendgrid-transport

This module is a transport plugin for [Nodemailer](https://github.com/andris9/Nodemailer) that makes it possible to send through [SendGrid's Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)!

## Table of Contents
- [Usage](#usage)
- [Deploying](#deploying)
- [License](#license)

<a name="usage"></a>
## Usage
Install via npm.

	npm install nodemailer-sendgrid-transport

Require the module and initialize it with your SendGrid credentials.

```javascript
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html
var options = {
	auth: {
		api_key: 'SENDGRID_APIKEY'
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
	html: '<b>Awesome sauce</b>',
	categories: ['Welcome Email', 'Receipt Email']
};

mailer.sendMail(email, function(err, res) {
	if (err) { 
		console.log(err) 
	}
	console.log(res);
});
```

<a name="deploying"></a>
## Deploying

* Confirm tests pass
* Bump the version in `README.md`, `package.json`, `test/sendgrid-transport-test.js`
* Update `CHANGELOG.md`
* Confirm tests pass
* Commit `Version bump vX.X.X`
* `npm publish`
* Push changes to GitHub
* Release tag on GitHub `vX.X.X`

<a name="license"></a>
## License
Licensed under the MIT License.
