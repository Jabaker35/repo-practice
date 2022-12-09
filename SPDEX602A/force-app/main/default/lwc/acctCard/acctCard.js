import { LightningElement, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class AcctCard extends LightningElement {

    @api accId;
    @api name;
    @api phone;
    @api annualRevenue;
    contacts;               //property will hold the list of contact records returned
    error;                  //property will hold the any errors returned from getContactList
    showContacts = false;   //property will be used to determine whether or not to display contacts

    handleSelect() {
        //console.log('acctCard handleSelect invoked with ID: ' + this.accId)
        const myEvent = new CustomEvent('selected', {detail: this.accId});
        this.dispatchEvent(myEvent);
    }
   
    displayContacts() {
        if (this.showContacts) {
            this.showContacts = false;
        } else {        
            getContactList({accountId: this.accId})
                .then((result) => {
                    this.contacts = result;
                    this.error = undefined;
                    this.showContacts = true;
                })
                .catch((error) => {
                    this.error = error;
                    this.contacts = undefined;
                });
        }
    }
}