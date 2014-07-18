'use strict';

var SendGrid = require('sendgrid');
var packageData = require('../package.json');

module.exports = function(options) {
  return new SendGridTransport(options);
};

function SendGridTransport(options) {
  options = options || {};

  this.options = options;
  this.name = 'SendGrid';
  this.version = packageData.version;
  this.sendgrid = SendGrid(this.options.auth.api_user, this.options.auth.api_key);
}

SendGridTransport.prototype.send = function(mail, callback) {
  var email = mail.data;

  if (typeof(email.to) === 'string') {
    email.to = mail.data.to.split(/[ ,]+/);
  }

  if (email.attachments) {
    email.files = email.attachments;
  }

  this.sendgrid.send(email, function(err, json) {
    callback(err, json);
  });
};
