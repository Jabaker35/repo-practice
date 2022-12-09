import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';


export default class ContactList extends LightningElement {

    @api recordId;
    contacts = [];
    contactsToDisplay = false;
    name;

    @wire(getContacts, {accountId: '$recordId'})
    wiredCons({error, data}) {
        if (data){
            this.contacts = data;
            if (this.contacts.length > 0) {
                this.contactsToDisplay = true;
            } else {
                this.contactsToDisplay = false;
            }
        }
        if (error) {
            console.log('Error Occurred');
        }
    }

    handleSelected(event) {
        this.name = event.detail;
    }

}