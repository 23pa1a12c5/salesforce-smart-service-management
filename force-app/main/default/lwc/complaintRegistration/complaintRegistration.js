import { LightningElement } from 'lwc';
import createComplaint from '@salesforce/apex/ComplaintController.createComplaint';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ComplaintRegistration extends LightningElement {

    customerName = '';
    email = '';
    phone = '';
    category = '';
    subject = '';
    description = '';
    priority = '';

    categoryOptions = [
        { label: 'Billing', value: 'Billing' },
        { label: 'Technical', value: 'Technical' },
        { label: 'Delivery', value: 'Delivery' },
        { label: 'Product', value: 'Product' },
        { label: 'General Inquiry', value: 'General Inquiry' }
    ];

    priorityOptions = [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' }
    ];

    handleCustomerName(event) {
        this.customerName = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
    }

    handlePhone(event) {
        this.phone = event.target.value;
    }

    handleCategory(event) {
        this.category = event.target.value;
    }

    handleSubject(event) {
        this.subject = event.target.value;
    }

    handleDescription(event) {
        this.description = event.target.value;
    }

    handlePriority(event) {
        this.priority = event.target.value;
    }

    submitComplaint() {

        createComplaint({
            customerName: this.customerName,
            email: this.email,
            phone: this.phone,
            category: this.category,
            subject: this.subject,
            description: this.description,
            priority: this.priority
        })
        .then(result => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: result,
                    variant: 'success'
                })
            );

            this.customerName = '';
            this.email = '';
            this.phone = '';
            this.category = '';
            this.subject = '';
            this.description = '';
            this.priority = '';

        })
        .catch(error => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );

        });

    }
}