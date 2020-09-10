import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({toDos, handlerDelete, handlerToggle}) => {
    return (
        <ul className="list-group list-group-flush">
        {
            toDos.map((toDO, i) => (
                <ToDoListItem
                            key={toDO.id} 
                            toDO={toDO} 
                            i={i} 
                            handlerDelete={handlerDelete} 
                            handlerToggle={handlerToggle}/>
                // <li
                //     key={toDO.id}
                //     className="list-group-item">
                //     <p className={`${ toDO.done && 'complete'}`}
                //         onClick={ () => handlerToggle(toDO.id)}>{i +1}. {toDO.desc}</p>
                //     <button
                //         onClick={() => handlerDelete(toDO.id)}
                //         className="btn btn-danger">
                //             Borrar
                //         </button>
                // </li>
            ))
        }
    </ul>
    )
}
