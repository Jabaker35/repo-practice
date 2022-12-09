import { LightningElement } from 'lwc';

export default class MyGreetings extends LightningElement {

    personInput;
    personToGreet;
    showThis = false;
    first = 'John';
    last = 'Doe';

    handleChange(event) {
        this.personToGreet = event.target.value;
    }

    handleToggle() {
        this.showThis = !this.showThis;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    handleName(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.first = event.target.value;
        } else if (field === 'lastName') {
            this.last = event.target.value;
        }
    }

    handleMyEvent() {
        this.showThis = !this.showThis;
    }

}