Feature: User going to validate New Owner Page for Petclinic application
    @test1
    Scenario: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid First Name, Last Name, Address, City, Telephone
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last
    @test1
    Scenario: Verify pet details for existing owner
        Given User is on All Owners list page
        When User clicks on existing owner name
        Then Pets details like Name,Birth Date,Type should be displayed



