import { LightningElement, api, wire } from 'lwc';
import getCases from '@salesforce/apex/CaseController.getCases';

export default class CaseList extends LightningElement {
    @api recordId;
    records;                // used to hold the account records returned
    error;                  // used to hold errors returned from the wire service

    @wire(getCases, {accountId: '$recordId'})
    wiredCases({data, error}) {
        if (data) {
            this.records = data;
            this.error = undefined;
        }
        if (error) {
            this.records = undefined;
            this.error = error;
        }
    }
}