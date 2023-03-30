@TradeMe
Feature: TradeMe UI and API Tests

    Rule: The Business rule it's going to appear here

        Scenario: "As a user, I can see all car brands on the Make dropdown"
            Given I navigate to the TradeMe Motor page
            Then I can verify that the number of car brands are 77

        Scenario Outline: "As a user, I can validate that each brand has the right amount of cars listed"
            Given I navigate to the TradeMe Motor page
            When I select the card brand <Brand>
            Then I can see it has <Amount> record in the results

            Examples:
                | Brand   | Amount |
                | Audi    | 2,448  |
                | Ford    | 4,679  |
                | BMW     | 559    |
                | Ferrari | 257    |

        Scenario: "As a user, I want to verify the amount of brands throught the API"
            Given I send the request to the endpoint
            Then I can see there are 78 car brands
