public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        //create a list to hold my Account records
        List<Account> acc = new List<Account>();

        //query the database to return account records
        //sorted by priority and name alphabetically
        acc = [SELECT Id, Name, Type, Industry, Sales_Priority__c FROM Account WITH SECURITY_ENFORCED
                ORDER BY Sales_Priority__c, Name DESC];

        //return the list of account records
        return acc;
    }

}
