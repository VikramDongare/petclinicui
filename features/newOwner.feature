Feature: User should be able to add new owner and validate existing owners details

    Scenario Outline: Add owners
        Given User is on petclininc home page
        When User clicks on owners tab and selects Add New dropdown menu
        And User enter valid owners detais as"<First_Name>" "<Last_Name>" "<Address>" "<City>" "<Telephone>"
        Then User should be navigate on Owners page and added owner should be saved

        Examples:
            | First_Name | Last_Name | Address            | City   | Telephone  |
            | Ernesto    | Wayne     | 4920 Ingram Street | Dayton | 8595874250 |
