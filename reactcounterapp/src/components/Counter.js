import "./Counter.css"

function Counter(props) {
    
    const {value, setValue} = props.useStateInst;

    function incrementCounter() {
        setValue(value+1);
    }

    function decrementCounter() {
        if(value !== 0)
            setValue(value-1)
    }

    return (
        <div className="container">
            <div className="btn btn-decrement" onClick={decrementCounter}>-</div>
            <div className="field-counter-value">{value}</div>
            <div className="btn btn-increment" onClick={incrementCounter}>+</div>
        </div>
    );
}

export default Counter;