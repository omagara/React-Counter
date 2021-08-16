import {useState} from "react";
import '../styles/Counter.css'

function Counter(){
    const [number, setNumber] = useState(0);

    function increase(){
        setNumber(number+1);
    }

    function decrease(){
        setNumber(number-1);
    }



return(
    <div class = "counter">
        <button class = "addButton" onClick={increase}>+</button>
        <span>{number}</span>
        <button class = "minusButton"onClick={decrease}>-</button>
        <hr></hr>
    </div>
    );
}
export default Counter;