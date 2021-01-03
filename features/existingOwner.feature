Feature: User should be validate existing owners pet details
    Scenario: Verify pet details
        Given User is on Owners page
        When User selects an existing Owner
        Then User should be able to see pet details for existing Owner