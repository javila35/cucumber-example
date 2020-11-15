Feature: Run tests
    Scenario: I want to read the default values of the index page file
        Given I am on the home page
        Then I should see the default title
        Then I should see the second header
        Then I should see the third header
        Then I should see the text input field
        Then I should see the dropdown menu for color
        Then I should see the button to change text

    Scenario: I want to change the text and color in the header
        Given I am on the home page
        Then I should change the text in the third header to 'The test is working'
        Then I want to select the color 'Green' from the drop down
        