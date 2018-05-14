var expect = require('expect');

var ResultsPage = function() {



	this.results = element(by.xpath(".//span[@class='exo-hasResults']/i"));


  this.verifyResults = function() {

expect(this.results.isDisplayed()).toBeTruthy();

  };


};
module.exports = ResultsPage;
