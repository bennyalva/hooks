import React, { useReducer } from 'react'
import './styles.css';
import { toDoReducer } from './toDoReducer';
const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Que paso rey',
        done: false
    }
]
export const TooDoApp = () => {

    const [toDos] = useReducer(toDoReducer, initialState);
    console.log(toDos)
    return (
        <div>
            <h1>ToDoApp ({toDos.length})</h1>
            <hr />
          <div className="row">
            <div className="col-7">
                <ul className="list-group list-group-flush">
                    {
                        toDos.map((toDO, i) => (
                            <li
                                key={toDO.id}
                                className="list-group-item">
                                <p className="text-center">{i +1}. {toDO.desc}</p>
                                <button
                                    className="btn btn-danger">
                                        Borrar
                                    </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr />
                <form>
                    <input 
                            type="text"
                            name="description"
                            placeholder="Learn .."
                            autoComplete="off"
                            className="form-control"
                            />
                            <button
                                    className="btn btn-outline-primary mt-1 btn-block">
                                    Agregar
                            </button>
                </form>
            </div>
          </div>
        </div>
    )
}
