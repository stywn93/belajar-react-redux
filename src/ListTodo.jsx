import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "./todoListSlice.js";

export default function ListTodo() {
    const todos = useSelector(state => {
        return state.todoList;
    });
    const dispatch = useDispatch();

    return (
        <>
            <h1>List Todo</h1>
            <Link to={"/todolist/add"}>Add Todo</Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>
                            <Link to={`/todolist/update/${todo.id}`}>Update</Link>
                            <button onClick={() => dispatch(removeTodo({id: todo.id}))}>Delete</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </>
    )
}