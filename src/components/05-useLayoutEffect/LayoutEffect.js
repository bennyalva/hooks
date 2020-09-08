import React, { useLayoutEffect, useRef } from 'react'
import './layout.css';
import { useFecth } from '../../hooks/useFecth';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {
       console.log(pTag.current.getBoundingClientRect())
    }, [quote])
    return (
        <div>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="mb-0">{quote}</p>
            </blockquote>

            <button
                onClick={increment}
                className="btn btn-primary">
                Next
            </button>
        </div>
    )
}
