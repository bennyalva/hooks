import React, { useReducer, useEffect } from 'react'
import './styles.css';
import { toDoReducer } from './toDoReducer';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';

const init = () => {
   return JSON.parse( localStorage.getItem('todos')) || [];   
}
export const TooDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(toDos))
    }, [toDos])
    
    const handlerDelete = (toDoId) => {
        const actionDelete = {
            type: 'delete',
            payload: toDoId
        }
        dispatch(actionDelete);
    }

    const handlerToggle = (toDoId) =>{
        dispatch({type: 'toggle', payload: toDoId})
    }

    const handlerAddToDo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>ToDoApp ({toDos.length})</h1>
            <hr />
          <div className="row">
            <div className="col-7">
             <ToDoList toDos={toDos} handlerDelete={handlerDelete} handlerToggle={handlerToggle}/>
            </div>
            <div className="col-5">
                <ToDoAdd todoAdd={handlerAddToDo}/>
            </div>
          </div>
        </div>
    )
}
