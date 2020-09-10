import React from 'react'

export const ToDoListItem = ({toDO, i, handlerDelete, handlerToggle}) => {
    return (
        <li
                    key={toDO.id}
                    className="list-group-item">
                    <p className={`${ toDO.done && 'complete'}`}
                        onClick={ () => handlerToggle(toDO.id)}>{i +1}. {toDO.desc}</p>
                    <button
                        onClick={() => handlerDelete(toDO.id)}
                        className="btn btn-danger">
                            Borrar
                        </button>
                </li>
    )
}
