import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({todoAdd}) => {
    const [{description}, handalerInputChange, reset] = useForm({description: ''});
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1 ) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        todoAdd({type: 'add', payload: newToDo});
        reset();
     }
    return (
        <>
         <h4>Agregar ToDo</h4>
                <hr />
                <form onSubmit={handlerSubmit}>
                    <input 
                            type="text"
                            name="description"
                            placeholder="Learn .."
                            autoComplete="off"
                            className="form-control"
                            onChange={handalerInputChange}
                            value={description}
                            />
                            <button
                                    type="submit"
                                    className="btn btn-outline-primary mt-1 btn-block">
                                    Agregar
                            </button>
                </form>   
        </>
    )
}
