trigger applicationTriggerHandler on Application__c (before insert, before update, 
                                                     before delete, after insert, 
                                                     after update, after undelete){
    if (trigger.isBefore){
        
        if(trigger.isInsert){
            applicationTriggerHelper.applyNamingConvention(trigger.new);
        }
        
        if (trigger.isUpdate){
            applicationTriggerHelper.applyNamingConvention(trigger.new);
        }
        
        if (trigger.isDelete){

        }
    }
    
    if (trigger.isAfter){
        
        if (trigger.isInsert){
            applicationTriggerHelper.generateInterviews(trigger.new);
        }
        
        if (trigger.isUpdate){
            
        }
        
        if (trigger.isDelete){

        }

        if (trigger.isUnDelete){

        }
    }

}