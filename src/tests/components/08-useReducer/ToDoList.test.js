import React from 'react';
const { shallow } = require("enzyme");
const { ToDoList } = require("../../../components/08-useReducer/ToDoList");
const { demoToDos } = require("../../fixtures/demoToDos");

describe('Tests ToDoList', () => {
    const handlerDelete = jest.fn();
    const handlerToggle = jest.fn();

    const wrapper = shallow(<ToDoList 
        toDos={demoToDos}
        handlerDelete={handlerDelete}
        handlerToggle={handlerToggle}
       />)
   test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot(); 
   });
   test('should get two <TodoListItem />', () => {
    expect(wrapper.find('ToDoListItem').length).toBe(demoToDos.length);
    expect(wrapper.find('ToDoListItem').at(0).prop('handlerDelete')).toEqual(expect.any(Function))
    expect(wrapper.find('ToDoListItem').at(0).prop('handlerToggle')).toEqual(expect.any(Function))
    
 });
    
});
