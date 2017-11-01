var expect = require('chai').expect;
var assert = require('assert');
var fs = require('fs');

describe('LICENSE', function() {
  it('should have correct end year', function(done) {
    var licenseFile = fs.readFileSync('LICENSE.txt', 'utf8');
    var yearRange = licenseFile.split('\n')[2].split(' ')[2];
    var endYear = parseInt(yearRange.split('-')[1]);
    var currentYear = (new Date()).getFullYear();
	
    if (endYear !== currentYear) {
	  expect(endYear).to.eq(currentYear);
    } else {
      done();
    }
  });
});
