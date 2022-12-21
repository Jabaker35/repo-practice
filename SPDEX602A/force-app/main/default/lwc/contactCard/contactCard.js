import { LightningElement, api } from 'lwc';

export default class ContactCard extends LightningElement {
    @api name;
    @api title;
    @api phone;
    @api email;

    handleSelected() {
        const myEvent = new CustomEvent('selected', {detail: this.name});
        this.dispatchEvent(myEvent);
    }
}