import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseCard extends NavigationMixin(LightningElement) {

    @api caseId;
    @api caseNumber;
    @api subject;
    @api status;
    @api priority;
    modeOpen = false;

    viewCase() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.caseId,
                objectApiName: 'Case',
                actionName: 'view',
            }
        });
    }

    editCase() {
        this.modeOpen = true;
    }

    closeCase() {
        this.modeOpen = false;
    }

    cancelMode() {
        this.modeOpen = false;
    }

    saveMode() {
        this.modeOpen = false;
        //create a toast event and dispatch it
        const toastEvent = new ShowToastEvent({
            title: 'Case saved successfully',
            message: `The Case record was saved successfully`,
            variant: 'success',
            mode: 'dismissable'
        });
        //display the toast even
        this.dispatchEvent(toastEvent);
    }

}