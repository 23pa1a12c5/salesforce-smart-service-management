public with sharing class DashboardController {

    @AuraEnabled(cacheable=true)
    public static List<Complaint__c> getComplaints() {

        return [
            SELECT Id,
                   Name,
                   Customer_Name__c,
                   Email__c,
                   Phone__c,
                   Category__c,
                   Subject__c,
                   Description__c,
                   Priority__c,
                   Status__c,
                   Resolution_Notes__c,
                   CreatedDate
            FROM Complaint__c
            ORDER BY CreatedDate DESC
        ];
    }

    @AuraEnabled
    public static void updateComplaint(
        Id complaintId,
        String status,
        String resolutionNotes
    ){

        Complaint__c complaint = [
            SELECT Id,
                   Status__c,
                   Resolution_Notes__c
            FROM Complaint__c
            WHERE Id = :complaintId
            LIMIT 1
        ];

        complaint.Status__c = status;
        complaint.Resolution_Notes__c = resolutionNotes;

        update complaint;
    }
}