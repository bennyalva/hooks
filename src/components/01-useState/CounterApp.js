import React, { useState } from 'react'
import './conter.css';
export default function CounterApp() {
    const [counter , setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter4: 20
    });
    const {counter1, counter2} = counter;  
    return (
        <>
          <h1>Counter { counter1 } </h1>  
          <h1>Counter { counter2 } </h1> 
          <hr />
          <button 
          className="btn btn-primary"
          onClick={() => {
              setCounter({
                  ...counter,
                  counter1: counter1 + 1
              })
          }}
          >
              +1
          </button>
        </>
    )
}
