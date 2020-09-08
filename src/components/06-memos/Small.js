import React, { memo } from 'react'

export const Small = memo(
    ({value}) => {
        console.log('me llamarón')
        return (
            <small>
                {value}
            </small>
        )
    }
);
