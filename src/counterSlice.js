import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 2,
    reducers: {
        increment: ((state, action) => {
            if (action.payload) {
                return state + action.payload;
            } else {
                return state + 1;
            }
        }),
        decrement: ((state, action) => {
            return (action.payload) ? (state - action.payload) : (state - 1);
        })
    },
    selectors: {
        multiplyCounter: ((state) => state * 2),
        getCounter: (state, value) => state * value
    }
});

export const {increment, decrement} = counterSlice.actions;
export const {multiplyCounter, getCounter} = counterSlice.selectors;