@isTest
private class sharing SalesTriggerTest {

    @isTest static void salesTest() {
        //Creates the test data for Account to be updated
        Account acc = new Account(Name = 'Test Account', Sales_Priority__c = 'Low');
        insert acc;

        //Creates the test data for Opportunity to be updated while refercing it the
        //Test Account above through the Account Id
        Opportunity opp = new Opportunity(AccountId = acc.Id, 
                                            Name = 'Test Opp', 
                                            CloseDate = Date.today(), 
                                            StageName = 'Prospecting', 
                                            Sales_Priority__c = 'Low');
        insert opp;

        //Changes the value of Sales Priority within the test data
        acc.Sales_Priority__c = 'Medium';
        update acc;

        //Verifying the related Opportunity to the Account is updated
        Opportunity oppsUpdate = [SELECT Id, Sales_Priority__c FROM Opportunity WHERE Id = :opp.Id LIMIT 1];
        System.assert(oppsUpdate.Sales_Priority__c = 'Medium', 'No related Opportunities to update.');
    }
}
