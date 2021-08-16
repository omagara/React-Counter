import { useState } from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";

function MultipleCounter() {
    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);
    }

    return (
        <div>
            <h1>COUNTER</h1>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    )
}

export default MultipleCounter;