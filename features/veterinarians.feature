Feature: Validate Veterinarians page
    @test1
    Scenario: Verify sub-menus like ALL and ADD NEW is displays on Veterinarians tab
        Given User is on homepage and able to see veterinarians menu
        When User clicks on veterinarians tab
        Then ALL and ADD NEW veterinarians sub-menus should be displayed
    @test1
    Scenario: Verify user clicks on ALL sub-menu on Veterinarians tab
        Given User is on Veterinarians tab
        When User clicks on ALL sub-menu
        Then Veterinarians list should be displayed   
    @test1
    Scenario: Verify total numbers of radiology Specialties
        Given User is on veterinarians page
        Then User should see total numbers of radiology from veterinarians Specialties

