// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		// its okay to do this because redux makes it immutable under the hood
		increment(state) {
			state.value++;
		},
		addAmount(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});

export const { increment, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
