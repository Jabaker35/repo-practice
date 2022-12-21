import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api firstName = 'John'; //property to hold the first name
    @api lastName = 'Baker'; //property to hold the last name

    handleClick() {
        const ourEvent = new CustomEvent('custevent', {detail: this.firstName});
        this.dispatchEvent(ourEvent);
    }

    constructor() {
        super();
        console.log('Child component constructor fired.')
    }

    connectedCallback() {
        console.log('Child component connectedCallback fired.')
    }

    disconnectedCallback() {
        console.log('Child component disconnectedCallback fired.')
    }

    renderedCallback() {
        console.log('Child component renderedCallback fired.')
    }
}