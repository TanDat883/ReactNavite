import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch("https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks");
  return response.json();
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    deleteTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteTask } = tasksSlice.actions;

export const selectAllTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;