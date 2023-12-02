import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? [],
  reducers: {
    addContact (state, action) {
      state.push(action.payload)
      localStorage.setItem('contacts', JSON.stringify(state))
    },
    deleteContact (state, action) {
      const filtred =  state.filter((contact) => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(filtred));
      return filtred;
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
