import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const FIELDS = [NAME_FIELD, TITLE_FIELD, PHONE_FIELD, EMAIL_FIELD];

export default class GetRecordForm extends LightningElement {

    @api recordId;
    contact;    //this property will hold the contact record.
    error;      //this property will hold the error record.

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS}) 
    wiredContact({error, data}) {
        if (data) {
            console.log(data);
            this.contact = data;
            this.error = undefined;
        } if (error) {
            console.log(error);
            this.error = error;
            this.contact = undefined;
        }
    };

    renderedCallback() {
        console.log(this.contact);
    }

    get name() {
        return this.contact.fields.Name.value;
    }

    get title() {
        return this.contact.fields.Title.value;
    }

    get phone() {
        return this.contact.fields.Phone.value;
    }

    get email() {
        return this.contact.fields.Email.value;
    }

    //Used data before using error
    // get name() {
    //     return getFieldValue(this.contact.data, NAME_FIELD);
    // }

}