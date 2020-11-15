Feature: Run tests
    Scenario: I want to read the default values of the index.html file
        Given I am on the home page
        Then I should see text 'Welcome to the site.'