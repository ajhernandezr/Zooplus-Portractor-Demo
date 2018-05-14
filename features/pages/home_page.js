
var HomePage = function() {

	this.productFinder = element(by.id('search_query_field'));
   this.searchButton = element(by.id('shop_search_top_submit'));

  this.get = function() {
	browser.waitForAngularEnabled(false);
    browser.get('http://www.zooplus.es/');
  };

  this.setProduct = function(value) {
    this.productFinder.sendKeys(value);
  };

  this.pressSearch = function(value) {
    this.searchButton.click();
  };


};

module.exports = HomePage;
