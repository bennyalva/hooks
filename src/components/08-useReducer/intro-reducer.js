const initialState = [
    {
        id: 1,
        toDo: 'Comprar pan',
        done: false
    }
]
const toDoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newToDo
}

toDos = toDoReducer(toDos, action)

console.log(toDos)