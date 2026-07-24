import { LightningElement } from 'lwc';
import getComplaints from '@salesforce/apex/DashboardController.getComplaints';

const COLUMNS = [
    {
        label: 'Complaint No',
        fieldName: 'Name',
        sortable: true
    },
    {
        label: 'Customer',
        fieldName: 'Customer_Name__c',
        sortable: true
    },
    {
        label: 'Category',
        fieldName: 'Category__c',
        sortable: true
    },
    {
        label: 'Priority',
        fieldName: 'Priority__c',
        sortable: true
    },
    {
        label: 'Status',
        fieldName: 'Status__c',
        sortable: true
    },
    {
        type: 'button',
        typeAttributes: {
            label: 'View',
            name: 'view',
            variant: 'brand'
        }
    }
];

export default class AgentDashboard extends LightningElement {

    columns = COLUMNS;

    complaints = [];
    allComplaints = [];

    totalComplaints = 0;
    newCount = 0;
    progressCount = 0;
    resolvedCount = 0;

    selectedComplaint;
    showDetails = false;

    // Search & Filter
    searchKey = '';
    selectedStatus = 'All';
    selectedPriority = 'All';

    // Sorting
    sortedBy;
    sortDirection = 'asc';

    statusOptions = [
        { label: 'All', value: 'All' },
        { label: 'New', value: 'New' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Resolved', value: 'Resolved' }
    ];

    priorityOptions = [
        { label: 'All', value: 'All' },
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' }
    ];

    connectedCallback() {
        this.loadComplaints();
    }

    async loadComplaints() {

        try {

            const data = await getComplaints();

            this.allComplaints = data;
            this.complaints = [...data];

            this.totalComplaints = data.length;

            this.newCount =
                data.filter(item => item.Status__c === 'New').length;

            this.progressCount =
                data.filter(item => item.Status__c === 'In Progress').length;

            this.resolvedCount =
                data.filter(item => item.Status__c === 'Resolved').length;

        } catch (error) {
            console.error(error);
        }

    }

    handleRowAction(event) {
        this.selectedComplaint = event.detail.row;
        this.showDetails = true;
    }

    async refreshDashboard() {
        await this.loadComplaints();
        this.showDetails = false;
        this.selectedComplaint = null;
    }

    handleSearch(event) {
        this.searchKey = event.target.value.toLowerCase();
        this.filterComplaints();
    }

    handleStatusChange(event) {
        this.selectedStatus = event.detail.value;
        this.filterComplaints();
    }

    handlePriorityChange(event) {
        this.selectedPriority = event.detail.value;
        this.filterComplaints();
    }

    filterComplaints() {

        let filtered = this.allComplaints.filter(item => {

            const complaintNo = item.Name ? item.Name.toLowerCase() : '';
            const customer = item.Customer_Name__c
                ? item.Customer_Name__c.toLowerCase()
                : '';

            const matchesSearch =
                complaintNo.includes(this.searchKey) ||
                customer.includes(this.searchKey);

            const matchesStatus =
                this.selectedStatus === 'All' ||
                item.Status__c === this.selectedStatus;

            const matchesPriority =
                this.selectedPriority === 'All' ||
                item.Priority__c === this.selectedPriority;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesPriority
            );

        });

        this.complaints = filtered;

    }

    handleSort(event) {

        this.sortedBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;

        let cloneData = [...this.complaints];

        cloneData.sort((a, b) => {

            let valueA = a[this.sortedBy] || '';
            let valueB = b[this.sortedBy] || '';

            valueA = typeof valueA === 'string' ? valueA.toLowerCase() : valueA;
            valueB = typeof valueB === 'string' ? valueB.toLowerCase() : valueB;

            if (valueA > valueB) {
                return this.sortDirection === 'asc' ? 1 : -1;
            }

            if (valueA < valueB) {
                return this.sortDirection === 'asc' ? -1 : 1;
            }

            return 0;
        });

        this.complaints = cloneData;
    }

}