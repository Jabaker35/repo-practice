import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class TargetCard extends LightningElement {

    @api name;
    @api type;
    @api industry;
    @api salesPriority;

    viewAcc() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__accountPage',
            attributes: {
                recordId: this.accId,
                actionName: 'view',
            }
        });
    }

}