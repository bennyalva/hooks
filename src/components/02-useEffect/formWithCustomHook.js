import React, { useState, useEffect } from 'react'
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
    const [formValues, handlerInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password } = formValues;
    useEffect(() => {
        console.log('cambio email')
    }, [email])
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
            <h1>useEffect FormWithCustomHook</h1>
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
            <div className="form-group">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="your mail"
                autoComplete="off"
                value={password}
                onChange={handlerInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
            </form>
        </>
    )
}
