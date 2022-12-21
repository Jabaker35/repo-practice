public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accountId) {
        List<Contact> cons = new List<Contact>();

        cons = [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId = :accountId WITH SECURITY_ENFORCED];

        return cons;
    }

    @AuraEnabled
    public static List<Contact> getContactList (String accountId) {
        List<Contact> cons = new List<Contact>();

        cons = [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId = :accountId WITH SECURITY_ENFORCED];

        return cons;
    }
}
