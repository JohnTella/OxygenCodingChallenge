Feature: Validate details of lowest priced item
I should be able to launch the URL (Amazon.com) with a compatible browser

    Scenario: I should be able to see the details of the least expensive item and log it in the console 
    Given I am on the Amazon website
    When I navigate to Computers -> Tablet accessories
    And I click on the JETech checkbox
    And I sort by newest arrivals and from lowest to highest
    And I click on the least expensive item to check the item
    Then I should see the details and be able to log it in the console