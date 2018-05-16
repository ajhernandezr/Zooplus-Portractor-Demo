Feature: Buy dog food 
	As a customer of Zooplus
  I would like to find a product with the browser 
  So that I can see a list of searched item	

  Scenario Outline: Search browser
	Given  I am in the Zooplus home 
	When  I input "<Product>" 
	And perform the search 
	Then I got the Search results
	
Examples: 
		| Product   |
		|  Pienso para perros | 
		| Pienso para gatos | 
