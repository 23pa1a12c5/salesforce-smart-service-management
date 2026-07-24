public with sharing class ComplaintController {

    @AuraEnabled
    public static String createComplaint(
        String customerName,
        String email,
        String phone,
        String category,
        String subject,
        String description,
        String priority
    ) {

        Complaint__c complaint = new Complaint__c();

        complaint.Customer_Name__c = customerName;
        complaint.Email__c = email;
        complaint.Phone__c = phone;
        complaint.Category__c = category;
        complaint.Subject__c = subject;
        complaint.Description__c = description;
        complaint.Priority__c = priority;
        complaint.Status__c = 'New';

        insert complaint;

        return 'Complaint Submitted Successfully';
    }
}