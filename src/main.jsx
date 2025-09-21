import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice.js";
import Counter from "./Counter.jsx";
// import {todoListSlice} from "./todoListSlice.js";
import ListTodo from "./ListTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import {todoListSlice} from "./todoListSlice.js";


/*
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<App/>}></Route>
                    <Route path={"/counter"} element={
                        <>
                            <Counter/>
                        </>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
*/

const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer
    }
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/todolist"}>
                        <Route path={"add"} element={<AddTodo/>}/>
                        <Route path={"update/:id"} element={<UpdateTodo/>}/>
                        <Route index element={<ListTodo/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);