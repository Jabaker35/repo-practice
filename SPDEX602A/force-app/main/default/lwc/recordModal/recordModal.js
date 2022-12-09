import { LightningElement, api } from 'lwc';

export default class RecordModal extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api layoutType;
    @api formMode;

    get modalLabel() {
        return `${this.formMode.charAt(0)}${this.formMode.slice(1)} ${this.objectApiName}`;
    }

    cancelModal() {
        this.dispatchEvent(new CustomEvent('cancel'));
    }

    successModal() {
        this.dispatchEvent(new CustomEvent('success'));
    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}