import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';

export const RealRef = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            {show && <MultipleCustomHooks />}
            {show1 && <MultipleCustomHooks />}
            <button
                    className="btn btn-primary mt-5"
                    onClick={() => setShow(!show)}>
                Show/Hide
            </button>
            <button
                    className="btn btn-primary mt-5"
                    onClick={() => setShow1(!show1)}>
                Show/Hide
            </button>
        </div>
    )
}
