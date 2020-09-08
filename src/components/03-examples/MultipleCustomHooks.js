import React from 'react'
import '../02-useEffect/effects.css';
import { useFecth } from '../../hooks/useFecth';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>Breaking bad</h1>
            <hr />
            {
                loading ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )

            }
            <button 
            onClick={increment}
            className="btn btn-primary">
                Next
            </button>
        </div>
    )
}
