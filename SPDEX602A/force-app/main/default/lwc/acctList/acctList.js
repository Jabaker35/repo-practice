import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import AccountMC from '@salesforce/messageChannel/AccountMessageChannel__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class AcctList extends LightningElement {

    records;                // used to hold the account records returned
    error;                  // used to hold errors returned from the wire service
    selectedAccount;        // property to hold the selected Account Id from the child event

    @wire(MessageContext) 
    messageContext;         // creating a property that hold the message context object

    @wire(getAccounts)
    wiredAccounts({data, error}) {
        if (data) {
            this.records = data;
            this.error = undefined;
            //method to default the first record by index to display
            this.selectedAccount = this.records[0].Id;
            this.sendMessageService(this.selectedAccount);
        }
        if (error) {
            this.records = undefined;
            this.error = error;
        }
    }

    handleSelect(event) {
        this.selectedAccount = event.detail;
        this.sendMessageService(this.selectedAccount);
        //console.log('handleSelect was called with ID: ' + this.selectedAccount);
    }

    // method to accept an account ID and publish it to the message channel
    sendMessageService(accountId) {
        publish(this.messageContext, AccountMC, { recordId: accountId });
        //console.log('Published a message with account ID: ' + accountId);
    }
}
