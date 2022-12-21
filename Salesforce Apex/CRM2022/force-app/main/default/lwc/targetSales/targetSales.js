import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { refreshApex } from '@salesforce/apex';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACC_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACC_TYPE_FILED from '@salesforce/schema/Account.Type';
import ACC_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACC_SALES_PRIORITY_FIELD from '@salesforce/schema/Account.SalesPriority';

export default class TargetSales extends LightningElement {

    @api recordId;
    displayedAcc = []; //array of records to display in the user interface
    allAcc = [];       //array of all the records returned from the wired method
    accToDisplay = false;
    status = 'All';
    results;            //property to hold the data and error properties returned from the wired method
    tableMode = false;
    cardChecked = true;
    tableChecked = false;
    fldsItemValues = [];

    columns = [
        {label: 'Account Name', fieldName: ACC_NAME_FIELD.fieldApiName, type: 'text'},
        {label: 'Type', fieldName: ACC_TYPE_FILED.fieldApiName, type: 'text'},
        {label: 'Industry', fieldName: ACC_INDUSTRY_FIELD.fieldApiName, type: 'text'},
        {label: 'Sales Priority', fieldName: ACC_SALES_PRIORITY_FIELD.fieldApiName, type: 'text', actions: this.updateList},
    ];

    options = [
        { value: 'Low', label: 'Low'},
        { value: 'Medium', label: 'Medium'},
        { value: 'High', label: 'High'},
    ];

    @wire(getPicklistValues, {recordTypeId: '012000000000000AAA', fieldApiName: SALESPRIORITY_FIELD})
    wiredPickList({data, error}) {
        if (data) {
            console.log(data);
            for (let item of data.values) {
                this.options.push({value: item.value, label: item.label});
            }
            this.options = this.options.slice();
        } else if (error) {
            console.log('Error occurred retrieving picklist values');
        }
    }; 

    @wire(getAccounts, { accountId: '$recordId'})
    wiredAcc(accRecords) {
        this.results = accRecords;
        if (this.results.data) {
            this.allAcc = this.results.data;
            this.updateList();
        }
        if (this.results.error) {
            console.log('Error occurred');
        }
    };

    handleChange(event) {
        this.status = event.detail.value;
        this.updateList();
    }

    handleSave(event) {
        this.fldsItemValues = event.detail.draftValues;
        const inputsItems = this.fldsItemValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });
 
       
        const promises = inputsItems.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Updated Successfully!!',
                    variant: 'success'
                })
            );
            this.fldsItemValues = [];
            return this.refresh();
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An Error Occurred!',
                    variant: 'error'
                })
            );
        }).finally(() => {
            this.fldsItemValues = [];
        });
    }

    updateList() {
        this.displayedAcc = [];    //clearing out the displayedAcc array

        if (this.status === 'All') {
            this.displayedAcc = this.allAcc;
        } else {
            for (let i = 0; i < this.allAcc.length; i++) {
                if (this.status === 'Low') {
                    if (!this.allAcc[i].IsOpened) {
                        this.displayedOpps.push(this.allOpps[i]);
                    }
                } else if (this.status === 'High') {
                    if (this.allAcc[i].IsOpened) {
                        this.displayedAcc.push(this.allAcc[i]);
                    }
                } else if (this.status === this.allAcc[i].SalesPriority) {
                    this.displayedAcc.push(this.allAcc[i]);
                }
            }
        }
        
        if (this.displayedAcc.length > 0) {
            this.accToDisplay = true;
        } else {
            this.accToDisplay = false;
        }

    }

    refresh() {
        return refreshApex(this.results);
    }


    handleToggle(event) {
        const selection = event.detail.value;
        if (selection === 'card') {
            this.tableMode = false;
            this.cardChecked = true;
            this.tableChecked = false;
        } else if (selection === 'table') {
            this.tableMode = true;
            this.cardChecked = false;
            this.tableChecked = true;
        }
    }
    
}