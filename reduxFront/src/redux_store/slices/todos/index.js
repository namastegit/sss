import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: null
};

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
});

const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = null;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.error("Error:", action.error.message);
            state.isError = true;
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    }
});

export default todoSlice.reducer;
