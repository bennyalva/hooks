import React from 'react';
import './conter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
          <h1>Counter with hook: { state }</h1>
          <hr />
          <button onClick={() => increment(2)} className="btn">+1</button>  
          <button onClick={() => decrement(5)} className="btn">-1</button>
          <button onClick={() => reset()} className="btn">reset</button>

        </>
    )
}

