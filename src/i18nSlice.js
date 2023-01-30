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
      },
    },
  },
});

export default i18nSlice;
