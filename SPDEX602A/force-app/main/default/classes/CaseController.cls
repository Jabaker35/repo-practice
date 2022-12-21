public with sharing class CaseController {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(String accountId) {
        //create a list to hold my Account records
        List<Case> cases = new List<Case>();

        cases = [SELECT Id, CaseNumber, Subject, Status, Priority FROM Case WHERE AccountId= :accountId WITH SECURITY_ENFORCED];

        //return the list of account records
        return cases;
    }
}
