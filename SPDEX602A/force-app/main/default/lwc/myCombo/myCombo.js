import { LightningElement } from 'lwc';

export default class MyCombo extends LightningElement {

    /*binding properties to hold the values of what is to be stored within
    the options as a coupled arrays using value and label*/
    greetOptions = [
        {value: 'Hello', label: 'Hello'},
        {value: 'Greetings', label: 'Greetings'},
        {value: 'Hola', label: 'Hola'}
    ];

    nameOptions = [
        {value: 'John', label: 'John'},
        {value: 'Dagny', label: 'Dagny'},
        {value: 'Henry', label: 'Henry'}
    ];

    //properties to store or placeholder as default display
    greeting = 'Hello';
    name = 'John';

    /*onchange event is connected to the binding method using if statements to
    change the value within the options as seen below*/
    /*handleChange(event) {
        if (event.target.name === 'greeting') {
            this.greeting = event.detail.value;
        }
        if (event.target.greeting === 'name') {
            this.name = event.detail.value;
        }
    }*/

    /*onchange event using separate binding methods to change the value within the
    options as seen below*/
    handleGreet(event) {
        this.greeting = event.detail.value;
    }

    handleName(event) {
        this.name = event.detail.value;
    }
}