import {useDispatch, useSelector} from "react-redux";
import {decrement, getCounter, increment, multiplyCounter} from "./counterSlice.js";
import {useRef} from "react";

export default function Counter() {
    const counter = useSelector(stateKu => {

        return stateKu.counter;
    });
    const dispatch = useDispatch();
    let bilangan = useRef(null);

    function handleIncrement() {
        const angka = Number(bilangan.current?.value);
        dispatch(increment(angka));
    }

    const doubleCounter = useSelector(multiplyCounter);
    const kaliCounter = useSelector((state) => {
        return getCounter(state, 3);
    });

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
            <br/>
            <h1>Double Counter : {doubleCounter}</h1>
            <h1>Triple Counter : {kaliCounter}</h1>
        </>
    )

}