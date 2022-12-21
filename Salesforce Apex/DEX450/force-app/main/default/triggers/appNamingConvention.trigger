trigger appNamingConvention on Application__c (before insert, before update) {
     
    if (trigger.isInsert){
        for (Application__c a : trigger.new){
            a.Name = a.NamingConvention__c;
        }
     }

     if (trigger.isUpdate){
         //Created to compare the previous/initial record with the new inserts
        for (Application__c a : trigger.new){
            //Holds the previous/initial state of the record
            if (trigger.oldMap.get(a.Id).Name != a.Name){
                a.Name = a.NamingConvention__c;
            }
        }
     }
}