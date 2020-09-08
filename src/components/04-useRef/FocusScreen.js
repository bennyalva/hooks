import React, { useRef } from 'react'
import '../02-useEffect/effects.css';
export const FocusScreen = () => {
    const inputRef = useRef();
    const handlerClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Your name"
            />
            <button 
                onClick={handlerClick}
                className="btn btn-outline-primary mt-5">
                focus
            </button>
        </div>
    )
}
