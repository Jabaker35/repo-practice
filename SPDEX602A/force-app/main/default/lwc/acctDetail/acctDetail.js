import { LightningElement, wire, api } from 'lwc';
import AccountMC from '@salesforce/messageChannel/AccountMessageChannel__c';
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AcctDetail extends LightningElement {

    @api accountId;                  
    @api objectApiName = 'Account';              //property to hold the object API for the record
    @api layoutType = 'Full';                    //property to hold the layout of the component
    @api mode = 'View';                          //property to hold the mode of the component
                                                 //valid values are:"edit, readonly, view"
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeFromMessageChannel();
    }

    subscribeToMessageChannel() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, AccountMC, 
                (message) => this.handleMessage(message), { scope: APPLICATION_SCOPE});
        }
    }

    unsubscribeFromMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        this.accountId = message.recordId;
    }

    savedMode() {
        //create a toast event and dispatch it
        const toEvent = new ShowToastEvent({
            title: 'Account saved successfully',
            message: `The Account record was saved successfully`,
            variant: 'success',
            mode: 'dismissable'
        });
        //display the toast event
        this.dispatchEvent(toEvent);
    }
}