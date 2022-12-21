trigger salesTriggerHandler on Account (after update) {
    
    //Trigger updates the Sales Priority for the Opportunity records
    salesTriggerHelper.salesPriority(trigger.new, trigger.oldMap);

}