import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.url = 'https://65703bc609586eff6640f6bd.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data; 
    } catch(e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { contact });
      console.log(response);
      return response.data; 
    } catch(e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact  = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response);
      return response.data; 
    } catch(e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
)