import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact (state, action) {
      state.push(action.payload)
    },
    deleteContact (state, action) {
      const filtred =  state.filter((contact) => contact.id !== action.payload);
      return filtred;
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
