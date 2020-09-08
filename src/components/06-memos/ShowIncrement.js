import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
    console.log('me volví a llamar')
    return (
        <button 
                className="btn btn-primary"
                onClick={
                    () => {
                        increment(5);
                    }
                }>
            Incrementar
        </button>
    )
});
