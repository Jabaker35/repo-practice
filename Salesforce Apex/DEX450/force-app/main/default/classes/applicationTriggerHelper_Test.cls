@isTest
private class applicationTriggerHelper_Test {
    
    @isTest
    private static void applyNamingConvention_Test(){
        
        //Step 1 - Create Sample Data
        List<Position__c> pos = createRecruitingAppData.createPositions();
        Account canAcc = new Account(Name = 'Candidates');
        insert canAcc;
        List<Contact> con = createRecruitingAppData.createCandidates();
        
        //Step 2 - Execute method
        Test.startTest();
        List<Application__c> apps = createRecruitingAppData.createApplications(pos, con);
        Test.stopTest();

        //Step 3 - Check results
        Set<Id> posIds = new Set<Id>();
        Set<Id> canIds = new Set<Id>();
        for (Application__c a : apps){
            posIds.add(a.Position__c);
            canIds.add(a.Candidate__c);
        }

        Map<Id,Position__c> posId2Pos = new Map<Id,Position__c>();
        Map<Id,Contact> canId2Can = new Map<Id,Contact>();
        for (Position__c p : [SELECT Id, Name FROM Position__c WHERE Id IN :posIds]){
            posId2Pos.put(p.Id,p);
        }

        for (Contact c : [SELECT Id, FirstName, LastName FROM Contact WHERE Id IN :canIds]){
            canId2Can.put(c.Id,c);
        }

        for (Application__c a : apps){
            system.Assert(a.name == + ' ' + canId2Can.get(a.Candidate__c).FirstName 
                                    + ' ' + canId2Can.get(a.Candidate__c).LastName 
                                    + ' ' + posId2Pos.get(a.Position__c), 
                                    'Invalid naming on Application');
        }
    }
}
