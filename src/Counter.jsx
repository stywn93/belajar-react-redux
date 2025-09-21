import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice.js";
import {useRef} from "react";

export default function Counter() {
    const counter = useSelector(stateKu => {
        console.info(`isi stateku =`, stateKu);
        return stateKu.counter;
    });
    const dispatch = useDispatch();
    let bilangan = useRef(null);

    function handleIncrement(){
        const angka = Number(bilangan.current.value);
        dispatch(increment(angka));
    }

    return (
        <>
            <h1>Counter = {counter}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement
            </button>
            <br/>
            <input type="text" placeholder="1" ref={bilangan}/>
            <button onClick={handleIncrement}>Increment by value</button>
        </>
    )

}