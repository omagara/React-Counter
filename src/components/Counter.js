import {useState} from "react";
import '../styles/CounterStyles.css'

function Counter(){
    const [number, setNumber] = useState(0);

    function increase(){
        setNumber(number+1);
    }

    function decrease(){
        setNumber(number-1);
    }



return(
    <div className = "counter">
        <button className = "addButton" onClick={increase}>+</button>
        <span>{number}</span>
        <button className = "minusButton"onClick={decrease}>-</button>
        <hr></hr>
    </div>
    );
}
export default Counter;