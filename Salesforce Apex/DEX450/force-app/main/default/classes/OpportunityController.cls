public with sharing class OpportunityController {
    
    //method to accept an Account Id and return a list of related Opportunity records
    public static List<Opportunity> getOpportunities(Id accountId) {
        List<Opportunity> opps = new List<Opportunity>();

        opps = [SELECT Id, Name, StageName, CloseDate, Amount,
                       IsWon, IsClosed FROM Opportunity
                       WHERE AccountId = :accountId];

    return opps;
    }
}
