import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.type) // type of function called
      console.log(action.payload) // payload is the data passed as arguement
      console.log(action.payload.amount) // payload is the data passed as arguement
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
