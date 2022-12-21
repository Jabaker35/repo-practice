import { LightningElement, api } from 'lwc';

export default class PropExample extends LightningElement {

    @api property1 = 'Property 1';
    @api property2 = 'Property 2';

    handleClicked() {
        console.log('handleClicked method was invoked');
        const myEvent = new CustomEvent('myevent');
        this.dispatchEvent(myEvent);
    }

    changeName(event) {
        this.firstName = event.target.value;
    }

}