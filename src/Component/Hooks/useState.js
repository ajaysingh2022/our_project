import React from 'react'

const State = () => {
const [inputValue, setInputValue] = React.useState("Ajay")
    const [counter, setCounter] = React.useState(0);
    const increment = () => {
        setCounter(counter + 1);
        console.log(counter + 1);
    }
    const onChange=(e)=>{
        setInputValue(e.target.value)
    }

    return (
        <>
            <h2>Hello UseState</h2>
            <div>
                {counter}
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <input onChange={onChange} placeholder='enter something' />
                {inputValue}
            </div>
        </>
    )
}

export default State;
