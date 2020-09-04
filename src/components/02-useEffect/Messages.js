import React, { useEffect, useState } from 'react'

export const Messages = () => {
    const [{x , y}, setcoors] = useState({x:0, y: 0})
    useEffect(() => {
        const mouseMove = (e) => {
            // console.log(e)
            // const coords = ;
            setcoors({x: e.x, y: e.y})
            console.log('D');
        };
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
               x: {x}
               y: {y}
            </p>
        </div>
    )
}
