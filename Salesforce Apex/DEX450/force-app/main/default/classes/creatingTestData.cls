public with sharing class creatingTestData {
    
    public static void createRecruitingAppData(){
        List<Position__c> createdPos = createRecruitingAppData.createPositions();
        List<Contact> createCand = createRecruitingAppData.createCandidates();
        List<Application__c> createApps = createRecruitingAppData.createApplications(createdPos, createCand);
        List<Interviewer__c> createInt = createRecruitingAppData.createInterviewers(createdPos);
    }

}
