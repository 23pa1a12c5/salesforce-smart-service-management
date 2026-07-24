# Salesforce Smart Service Management System

A Salesforce-based customer complaint management application developed using **Lightning Web Components (LWC)** and **Apex**. The system enables organizations to efficiently register, manage, track, and resolve customer complaints through an interactive dashboard.

---

## 📌 Project Overview

The Salesforce Smart Service Management System is designed to streamline customer support by providing an intuitive interface for complaint management. Support agents can register complaints, update their status, add resolution notes, and monitor complaints using a dashboard with search, filtering, and sorting capabilities.

---

## 🚀 Features

### Complaint Management
- Register new customer complaints
- Auto-generated Complaint Number
- View complaint details
- Update complaint status
- Add resolution notes

### Agent Dashboard
- Dashboard statistics
  - Total Complaints
  - New Complaints
  - In Progress Complaints
  - Resolved Complaints
- Search complaints by
  - Complaint Number
  - Customer Name
- Filter complaints by
  - Status
  - Priority
- Sort complaints by
  - Complaint Number
  - Customer Name
  - Category
  - Priority
  - Status
- Lightning Datatable for professional record management

---

## 🛠️ Technologies Used

- Salesforce Platform
- Lightning Web Components (LWC)
- Apex
- SOQL
- Salesforce Lightning Design System (SLDS)
- JavaScript
- HTML
- CSS

---

## 📂 Project Structure

```
force-app/
│
├── main/
│   └── default/
│       ├── classes/
│       ├── lwc/
│       ├── objects/
│       ├── layouts/
│       ├── permissionsets/
│       └── applications/
│
├── manifest/
│
└── sfdx-project.json
```

---

## 📸 Application Modules

### Complaint Registration
- Register customer complaints
- Capture customer information
- Select category
- Assign priority
- Track complaint status

### Support Agent Dashboard
- Dashboard overview
- Complaint statistics
- Search functionality
- Status filtering
- Priority filtering
- Sorting
- View complaint details

### Complaint Details
- View complete complaint information
- Update complaint status
- Add resolution notes
- Refresh dashboard automatically

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/23pa1a12c5/salesforce-smart-service-management.git
```

### Navigate to Project

```bash
cd salesforce-smart-service-management
```

### Authorize Salesforce Org

```bash
sf org login web
```

### Deploy Source

```bash
sf project deploy start
```

---

## 📊 Functionalities

| Feature | Status |
|----------|--------|
| Complaint Registration | ✅ |
| Complaint Details | ✅ |
| Dashboard Statistics | ✅ |
| Search | ✅ |
| Status Filter | ✅ |
| Priority Filter | ✅ |
| Sorting | ✅ |
| Resolution Notes | ✅ |
| Update Complaint Status | ✅ |

---

## 🎯 Future Enhancements

- Pagination
- Export to CSV
- Email Notifications
- Flow Automation
- Reports & Dashboards
- Toast Notifications
- Loading Spinner

---

## 👨‍💻 Author

**Mahesh Meesala**

GitHub: https://github.com/23pa1a12c5

---
