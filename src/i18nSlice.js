import { createSlice } from "@reduxjs/toolkit";

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: 'en',
    translations: {
      en: {
        loadingText: 'Loading',
        menu: {
          newCustomer: 'New Customer',
          newOrder: 'New Order',
          search: 'Search',
          customers: 'Customers',
          orders: 'Orders',
          settings: 'Settings',
        },
        customerDetails: {
          placeholders: {
            firstname: 'Firstname',
            lastname: 'Lastname',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            city: 'City',
            zip: 'Zip',
            vatNumber: 'Vat Number',
            taxOffice: 'Tax Office',
            notes: 'Notes',
          },
        },
        newCustomer: {
          btnSaveText: 'Save',
          btnSaveProcessingText: 'Please wait',
          btnSaveCompletedText: 'Saved',
          btnNewCustomer: 'New Customer',
        },
        customersList: {
          id: "ID",
          fullname: 'Fullname',
          phone: 'Phone',
          vatNumber: 'Vat Number',
          city: 'City',
        },
        customerPage: {
          btnSaveText: 'Update',
          btnSaveProcessingText: 'Please wait',
          btnSaveCompletedText: 'Updated',
          customerId: 'Customer ID',
        },
      },
      el: {
        loadingText: 'Φόρτωση',
        menu: {
          newCustomer: 'Νέος Πελάτης',
          newOrder: 'Νέα Παραγγελία',
          search: 'Αναζήτηση',
          customers: 'Πελάτες',
          orders: 'Παραγγελίες',
          settings: 'Ρυθμίσεις',
        },
        customerDetails: {
          placeholders: {
            firstname: 'Όνομα',
            lastname: 'Επώνυμο',
            phone: 'Τηλέφωνο',
            email: 'Email',
            address: 'Διεύθυνση',
            city: 'Πόλη',
            zip: 'Τ.Κ.',
            vatNumber: 'Α.Φ.Μ.',
            taxOffice: 'Δ.Ο.Υ.',
            notes: 'Σημειώσεις',
          },
        },
        newCustomer: {
          btnSaveText: 'Αποθήκευση',
          btnSaveProcessingText: 'Παρακαλώ περιμένετε',
          btnSaveCompletedText: 'Αποθηκεύτηκε',
          btnNewCustomer: 'Νέος Πελάτης',
        },
        customersList: {
          id: 'Κωδικός',
          fullname: 'Ονοματεπώνυμο',
          phone: 'Τηλέφωνο',
          vatNumber: 'Α.Φ.Μ.',
          city: 'Πόλη',
        },
        customerPage: {
          btnSaveText: 'Αποθήκευση',
          btnSaveProcessingText: 'Παρακαλώ περιμένετε',
          btnSaveCompletedText: 'Οι αλλαγές αποθηκεύτηκαν',
          customerId: 'Κωδικός Πελάτη',
        },
      },
    },
  },
});

export default i18nSlice;
