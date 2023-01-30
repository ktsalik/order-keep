import { configureStore } from "@reduxjs/toolkit";
import i18nSlice from "./i18nSlice";

const store = configureStore({
  reducer: {
    i18n: i18nSlice.reducer,
  },
});

export default store;