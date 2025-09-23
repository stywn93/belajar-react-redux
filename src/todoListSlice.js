import {createSlice} from "@reduxjs/toolkit";

let id = 0;

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const {namanya} = action.payload;
            state.push({name:namanya, id: id++});
        },
        removeTodo: (state, action) => {
            const {id} = action.payload;
            const index = state.findIndex(todo => {
                return todo.id === id;
            });
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateTodo: (state, action) => {
            const {id, name} = action.payload;
            const todo = state.find(todo => {
                return todo.id === id;
            }); //temukan dulu objeknya dengan function find()
            if (todo) {
                todo.name = name;
            }
        }
    },
    selectors: {
        getTodo: (state, kodeID) => {
            return state.find(todo => todo.id === kodeID);
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoListSlice.actions;
export const {getTodo} = todoListSlice.selectors;