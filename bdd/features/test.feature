Feature: Run tests
    Scenario: I want to read the default values of the index page file
        Given I am on the home page
        Then I should see the default title
        Then I should see the default second header
        Then I should see the default third header
        Then I should see the text input field
        Then I should see the dropdown menu for color
        Then I should see the button to modify text

    Scenario: I want to change the text in the header
        Given I am on the home page
        Then I should change the text in the third header to 'The test is working'
        Then I should submit the changes
        Then I should not see the default third header
        Then I should see the text 'The test is broken'

    Scenario: I want to make sure all the colors work
        Given I am on the home page
        Then I want to select the color 'Green' from the drop down
        Then I should submit the changes
        Then I should make sure the third header is 'Green'
        Then I want to select the color 'Red' from the drop down
        Then I should submit the changes
        Then I should make sure the third header is 'Red'
        Then I want to select the color 'Purple' from the drop down
        Then I should submit the changes
        Then I should make sure the third header is 'Puple'