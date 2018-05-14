var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var ProductBrowserSteps = function() {

  var HomePage = require("../pages/home_page.js");
  var ResultsPage = require("../pages/results_page.js");

  this.World = function MyWorld() {
    this.homePage = new HomePage();
this.resultsPage = new ResultsPage();
  };

this.Given(/^I am in the Zooplus home$/, function (callback) {
 
 this.homePage.get();
  callback();
});

 this.When(/^I input "([^"]*)"$/, function (value, callback) {
   this.homePage.setProduct(value);
   callback();
 });

 this.When(/^perform the search$/, function (callback) {
 this.homePage.pressSearch();
   callback();
 });

  this.Then(/^I got the Search results$/, function (callback) {

  this.resultsPage.verifyResults();
   callback();
 });



};

module.exports = ProductBrowserSteps;