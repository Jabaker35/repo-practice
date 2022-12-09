import { LightningElement, api } from 'lwc';

export default class AppRecordForm extends LightningElement {

    @api recordId;                  //property to hold a record ID
    @api objectApiName;             //property to hold the object API for the record
    @api layoutType = 'Compact';    //property to hold the layout of the component
    @api mode = 'Read Only';        //property to hold the mode of the component
                                    //valid values are:"edit, readonly, view"

    handleCancel() {
        const cancelEvent = new CustomEvent('canceled');
        this.dispatchEvent(cancelEvent);
    }

    handleSuccess() {
        const successEvent = new CustomEvent('saved');
        this.dispatchEvent(successEvent);
    }
}