import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getTasks } from './selectors';

axios.defaults.baseURL = 'https://635d647bcb6cf98e56b3ce96.mockapi.io';

export const fetchContacts = createAsyncThunk(
  '/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addTask = createAsyncThunk(
//   "tasks/addTask",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post("/tasks", { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const toggleCompleted = createAsyncThunk(
//   "tasks/toggleCompleted",
//   async (task, thunkAPI) => {
//     try {
//       const response = await axios.put(`/tasks/${task.id}`, {
//         completed: !task.completed,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
