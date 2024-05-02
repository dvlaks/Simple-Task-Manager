import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask(state, action) {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      state.tasks[index] = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskCompletion(state, action) {
      const index = state.tasks.findIndex(t => t.id === action.payload);
      state.tasks[index].completed = !state.tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
