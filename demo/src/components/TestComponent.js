import './TestComponent.css'

function TestComponent(props) {
    return (
        <div>
            <p>This is a Test Component</p>
            <p>{props.userName}</p>
            <p>{props.userId}</p>

            {/* props.children used for printing the data passed in <end>here...</end> */}
            <p>{props.children}</p>

            <h1 className={props.className}>{props.className}</h1>
        </div>
    );
}

export default TestComponent;