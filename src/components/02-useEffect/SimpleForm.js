import React, { useEffect, useState } from 'react'
import './effects.css';
import { Messages } from './Messages';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email } = formState;
    useEffect(() => {
        // console.log('hey')
    }, []);
    useEffect(() => {
       //  console.log('formState')
    }, [formState]);
    useEffect(() => {
        // console.log('email')
    }, [email]);

    const handlerInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="your name"
                autoComplete="off"
                value={name}
                onChange={handlerInputChange}/>
            </div>
            <div className="form-group">
                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="your mail"
                autoComplete="off"
                value={email}
                onChange={handlerInputChange}/>
            </div>
            { (name === '123') && <Messages />}
        </>
    )
}
