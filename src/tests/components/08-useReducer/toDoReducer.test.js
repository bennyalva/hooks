const { toDoReducer } = require("../../../components/08-useReducer/toDoReducer");
const { demoToDos } = require("../../fixtures/demoToDos");

describe('Test TodoReducer', () => {
    test('should return default state', () => {
       const state = toDoReducer( demoToDos, {}); 
       expect( state).toEqual(demoToDos);
    });
    test('should return add toDo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Node',
                done: false
            }
        }
        const state = toDoReducer( demoToDos, action); 
        expect( state.length).toEqual(3);
        expect(state.find(toDo => toDo.id === 3).desc).toEqual('Node');
     });
     test('should delete toDo', () => {
        const action = {
            type: 'delete',
            payload: 3
        }
        const state = toDoReducer( demoToDos, action); 
        expect( state.length).toEqual(2);
     });
     test('should change done value toDo', () => {
        const action = {
            type: 'toggle',
            payload: 2
        }
        const state = toDoReducer( demoToDos, action); 
        expect(state.find(toDo => toDo.id === 2).done).toBe(true);
     });
});
