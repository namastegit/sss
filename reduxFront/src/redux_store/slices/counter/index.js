import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;  // Mutate `state.value`
    },
    decrement: (state) => {
      state.value -= 1;  // Mutate `state.value`
    },
    // Uncomment if needed
    // incrementBYAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;
// Export the reducer
export default counterSlice.reducer;
