public with sharing class createRecruitingAppData {
    /*This block of code creates test data for the Recruiting App.
    It assumes the following items:
    there are 3 recruiting users already setup
    there is already a recruiting queue that is named 'Recruiting' 
    and allows Application and Position. 
    It also
    */

    //These variables are needed for multiple methods so we are putting them in the outerclass
    
    //need Recruiter queue Id
    static Group RecruiterQ = [SELECT Id FROM Group WHERE Name = 'Recruiter'];
    
    //need Recruiter profile Id
    static Profile GenwattRecruiter = [SELECT Id FROM Profile WHERE Name = 'Genwatt Recruiter'];

    //Need a list of users who have the Recruiter profile
    static List<User> RecruitingUsers = [SELECT Id, Name 
                                        FROM User WHERE ProfileId = :GenwattRecruiter.Id];
    /* 0 - Joe Recruiter
       1 - User One
       2 - User Two
    */

    public static List<Position__c> createPositions(){
        
        //need a list of possible settings for the Status field in the Position object
        List<String> posStatusList = new List<String>{'New','Open','Closed'};

        //Method
        //Create 100 new positions with a naming convention of Position#{unique number} 
        //Give ownership of Positions to the Recruiting Queue
        //Distribute the Hiring Manager between all 3 recruiters 
        // Distribute the Position status between all status options

        List<Position__c> newTestPositions = new List<Position__c>();
        Integer listPos = 0; //Tracking the hiring manager option
        Integer statusPos = 0; //Traking the Status option
    
        for (Integer i=0; i < 100; i++){
            //Determining values for different position fields
            String posName = 'Position#'+i.format();
            User currentHM = RecruitingUsers.get(listPos);
            String currentStatus = posStatusList.get(statusPos);
            /* 
            if status = new -->expiry date 30 days from the current date
                            -->due date is 60 days from the current date
            if status = open-->expiry date 15 days from the current date
                            -->due date is 45 days from the current date
            if status = closed-->expiry date 30 days less than the current date
                            -->due date is 15 days less than the current date
            */
            Date expiryDate = Date.today() + 30;
            Date dueDate = Date.today() + 60;
            switch on currentStatus {
                when 'New' { expiryDate = Date.today() + 30;
        		    dueDate = Date.today() + 60;
                }
                when 'Open' { expiryDate = Date.today() + 15;
        		    dueDate = Date.today() + 45;
                }
                when 'Closed' { expiryDate = Date.today() - 30;
        		    dueDate = Date.today() - 15;
                }
        }

        
        //Creating position
        Position__c pos = new Position__c(Name=posName,
                                    Is_Test_Data__c = true,
                                    Hiring_Manager__c = currentHM.Id,
                                    Status__c = currentStatus,
                                    Expiry_Date__c = expiryDate,
                                    Due_Date__c = dueDate,
                                    OwnerId = RecruiterQ.Id);
        newTestPositions.add(pos);
        
        //Deciding what the next position's values should be
        if (listPos == RecruitingUsers.Size()-1) { // Have we got to the end of our list of recruiters??
            listPos = 0;                       // if we have, then we need to reset to the top of the list
         } else { listPos++;                   // if we havent go on to the next user on the list
        }
        
        statusPos = statusPos+listPos; 
        if(statusPos >= posStatusList.Size()-1){ // Have we got to the end of our list of status list??
            statusPos = 0;                       // if we have, then we need to reset to the top of the list
         	}
   	}
    	System.Debug(newTestPositions);
    	insert newTestPositions;

        return newTestPositions;
    }

    public static List<Contact> createCandidates(){
        //Create 100 new Candidates with a naming convention of Candidate {unique number}
	    //Get record type Id
    	RecordType candidateRT = [SELECT Id, Name FROM RecordType WHERE Name = 'Candidates' LIMIT 1];
	
        //Get AccountId for Candidate Account record
        Account candidate = [SELECT ID,Name FROM Account WHERE Name = 'Candidates' LIMIT 1]; 
    
        List<Contact> newTestCandidates = new List<Contact>();
    
            for (Integer i=0; i < 100; i++){
            //Determining values for different position fields
            String canName = 'Candidate#'+i.format();
            String rtId = candidateRT.Id;
             //Creating new contact
            Contact cont = new Contact(Is_Test_Data__c = true,
                                        AccountId = candidate.Id,
                                        FirstName = canName,
                                        LastName = 'Test',
                                        RecordTypeId = rtId);
                                        newTestCandidates.add(cont);
             }
        System.Debug(newTestCandidates);
        insert newTestCandidates;

        return newTestCandidates;
    }

    public static List<Application__c> createApplications(List<Position__c> newTestPositions, List<Contact> newTestCandidates){
        //Create 5 Applications for each position
	    List<String> appStatus = new List<String>{'Applied','Interviewing','Rejected','Withdrawn','Accepted'};

	    Integer canNum = 0;
	    List<Application__c> newApps = new List<Application__c>();

	    for(Position__c pos : newTestPositions){
	    
    	for (Integer i=0; i>5; i++){
        						Application__c app = new Application__c();
								//app.Name = 'newApp';
								app.is_Test_Data__c = true;
    							app.position__c = pos.Id;
        						app.Status__c = appStatus.get(i);
        						app.candidate__c = newTestCandidates.get(canNum).Id;
                if (canNum == newTestCandidates.size()-1){
            	        canNum = 0;
        		} else { canNum++;}
                newApps.add(app);
    		}
  
		}
	
	    System.Debug(newApps);
	    insert newApps;

        return newApps;
    }

    //Create 3 Interviewer records for each position
        /*Define our new method and set it up to receive two parameters
        1. newTestPositions
        2. RecruitingUsers (Just like createApplications method)
        Create a loop that goes through every position
        Inside that loop create a nested for loop that goes through 3 times creating
        a separate interviewer record for each recruiting user return results
        after insertion of new interviewer records
        */

        public static List<Interviewer__c> createInterviewers(List<Position__c> newTestPositions){
            List<Interviewer__c> newInts = new List<Interviewer__c>();

            for(Position__c pos : newTestPositions){
                for (Integer i=0; i>3; i++){
                    Interviewer__c itw = new Interviewer__c();
                    itw.is_Test_Data__c = true;
                    itw.position__c = pos.Id;
                    itw.Interviewer__c = RecruitingUsers.get(i).Id;
                    newInts.add(itw);
                }
            }
            System.Debug(newInts);
            insert newInts;

            return newInts;
        }

    //Create review records for each application/interviewer that is in the Interview stage or higher
}
