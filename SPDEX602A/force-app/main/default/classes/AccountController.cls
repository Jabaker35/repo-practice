public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        //create a list to hold my Account records
        List<Account> acc = new List<Account>();

        //query the database to return account records
        //5 records returned sorted by AnnualRevenue
        acc = [SELECT Id, Name, Phone, AnnualRevenue FROM Account WITH SECURITY_ENFORCED
                ORDER BY AnnualRevenue DESC NULLS LAST LIMIT 5];

        //return the list of account records
        return acc;
    }
}
