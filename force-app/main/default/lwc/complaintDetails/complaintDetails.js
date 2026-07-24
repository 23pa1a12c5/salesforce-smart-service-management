import { LightningElement, api } from 'lwc';
import updateComplaint from '@salesforce/apex/DashboardController.updateComplaint';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ComplaintDetails extends LightningElement {

    @api complaint;

    status = '';
    resolutionNotes = '';

    statusOptions = [
        { label: 'New', value: 'New' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Resolved', value: 'Resolved' },
        { label: 'Closed', value: 'Closed' }
    ];

    connectedCallback() {
        if (this.complaint) {
            this.status = this.complaint.Status__c;
            this.resolutionNotes = this.complaint.Resolution_Notes__c;
        }
    }

    handleStatus(event) {
        this.status = event.detail.value;
    }

    handleNotes(event) {
        this.resolutionNotes = event.target.value;
    }

    saveComplaint() {

        updateComplaint({
            complaintId: this.complaint.Id,
            status: this.status,
            resolutionNotes: this.resolutionNotes
        })
        .then(() => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Complaint Updated Successfully',
                    variant: 'success'
                })
            );

            // Notify parent component to refresh dashboard
            this.dispatchEvent(
                new CustomEvent('refreshdashboard')
            );

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