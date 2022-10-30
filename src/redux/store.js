import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
