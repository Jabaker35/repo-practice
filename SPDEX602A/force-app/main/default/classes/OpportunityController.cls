public with sharing class OpportunityController {

    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpportunities(String accountId) {
        //list to hold the related opp records
        List<Opportunity> opps = new List<Opportunity>();

        /* query the database to select the opp records related to the Account Id that
        was passed in as a parameter and populate the opps variable with those records */
        opps = [SELECT Id, Name, Amount, StageName, CloseDate, IsWon, IsClosed FROM Opportunity 
                WHERE AccountId = :accountId WITH SECURITY_ENFORCED];
        
        return opps; //return the list of the related opp records
    }
}
