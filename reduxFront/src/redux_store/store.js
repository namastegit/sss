import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';  // Import the counter reducer
import todoReducer from './slices/todos';      // Import the todo reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Add counter reducer
    todo: todoReducer,        // Add todo reducer
  },
});
