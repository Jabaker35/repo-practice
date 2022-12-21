public with sharing class salesTriggerHelper{ 
    
    public static void salesPriority(List<Account> triggerNew, Map<Id> oldMap){
 
        //Map to the values to the Sales Priority in the Account object
        Map<Id, String> acct = new Map<Id, String>();
        
        for (Account acc : triggerNew){
            //Holds the previous/initial state of the record
            if (Trigger.oldMap.get(acc.Id).Sales_Priority__c != acc.Sales_Priority__c){
                //Adds the Id to the set
                acct.put(acc.Id, acc.Sales_Priority__c);
            }
        }

        //Holds a list of Opportunities
        List<Opportunity> oppsToUpdate = new List<Opportunity>();

        //Loop through Opportunities to be updated by Account Id
        for(Opportunity opp : [SELECT Id, Sales_Priority__c, AccountId FROM Opportunity WHERE AccountId IS IN :acct.keySet()]){
            //Using the Get method return the Sales Priority for the Account Id 
            opp.Sales_Priority__c = acct.get(opp.AccountId);
            //Adds the created Opportunity to the list of Opportunities to be updated
            oppsToUpdate.add(opp);
        }

        //Command to update Opportunities
        update oppsToUpdate;
    }

}
