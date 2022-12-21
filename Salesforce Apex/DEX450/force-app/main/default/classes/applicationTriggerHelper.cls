public with sharing class applicationTriggerHelper {
    
    public static void applyNamingConvention (List<Application__c> triggerNew){
        for (Application__c a : triggerNew){
            a.Name = a.NamingConvention__c;
        }
    }

    public static void applyNamingConvention (List<Application__c> triggerNew, Map<Id, Application__c> oldMap){
        for (Application__c a : triggerNew){
            //Holds the previous/initial state of the record
            if (oldMap.get(a.Id).Name != a.Name){
                a.Name = a.NamingConvention__c;
            }
        }
    }
        
    public static void generateInterviews (List<Application__c> triggerNew){
            //Need to create interview records for evey designated interviewer for the position
            //Do a query to affect Positions and get the associated Interviewers
            //Create Review records for each interviewer and relate it to the correct Application

            List<Review__c> newReviews = new List<Review__c>();

            Set<Id> positionIds = new Set<Id>();
            Map<Id,Set<Id>> app2Pos = new Map<Id,Set<Id>>();
            for (Application__c a : triggerNew){
                positionIds.add(a.Position__c);

                if(app2Pos.containsKey(a.Position__c)){
                    Set<Id> currentSet = app2Pos.get(a.Position__c);
                    currentSet.add(a.Id);
                    app2Pos.put(a.Position__c,currentSet);
                } else {
                    Set<Id> newSet = new Set<Id>();
                    newSet.add(a.Id);
                    app2Pos.put(a.Position__c,newSet);
                }
            }

            for (Position__c p : [SELECT Id, (SELECT Id FROM Interviewers__r) 
                                  FROM Position__c WHERE Id IN :positionIds]){
                for (Interviewer__c itw : p.Interviewers__r){
                    for (Id appId : app2Pos.get(p.Id)){
                        Review__c rev = new Review__c();
                        rev.Application__c = appId;
                        rev.Interviewer__c = itw.Id;
                        newReviews.add(rev);
                    }
                }
            }
        insert newReviews;
    }
}
