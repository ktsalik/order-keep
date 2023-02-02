import { createSlice } from "@reduxjs/toolkit";

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: 'el',
    translations: {
      en: {
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
            notes: 'Notes',
          },
        },
        newCustomer: {
          btnSaveText: 'Save',
          btnSaveProcessingText: 'Please wait',
          btnSaveCompletedText: 'Saved',
          btnNewCustomer: 'New Customer',
        },
      },
      el: {
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
            notes: 'Σημειώσεις',
          },
        },
        newCustomer: {
          btnSaveText: 'Αποθήκευση',
          btnSaveProcessingText: 'Παρακαλώ περιμένετε',
          btnSaveCompletedText: 'Αποθηκεύτηκε',
          btnNewCustomer: 'Νέος Πελάτης',
        },
      },
    },
  },
});

export default i18nSlice;
