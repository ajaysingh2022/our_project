import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };

        case "toggleShowText":
            return { count: state.count , showText: !state.showText };

            default:
                return state;
    }
}

const Reducer = () => {
    //state is state for all state and other is dispatch function
    const [state, dispatch] = useReducer(reducer,
        { count: 0, showText: true })                                   // reducer is function & {} initial value for all the states
    return (
        <>
        <div >
            useReducer
            {/* <h3>{count}</h3> */}
            <h3>{state.count}</h3>

            <button onClick={()=>{
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});

            }}>Click here</button>
        {state.showText && <p>This is a text</p>}
        </div>
        </>
    )
}

export default Reducer



//()=>{setCount(count+1); setShowText(!showText);}
