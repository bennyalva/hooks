import React from 'react';
import { demoToDos } from '../../fixtures/demoToDos';
const { shallow } = require("enzyme");
const { ToDoListItem } = require("../../../components/08-useReducer/ToDoListItem");

describe('tests ToDoListItem', () => {
    const handlerDelete = jest.fn();
    const handlerToggle = jest.fn();

    const wrapper = shallow(<ToDoListItem 
        toDO={demoToDos[0]}
          i={0}
        handlerDelete={handlerDelete}
        handlerToggle={handlerToggle}
    />);
   test('should show correctly', () => {
       expect(wrapper).toMatchSnapshot();
   });

   test('should call fucntion delete', () => {
       wrapper.find('button').simulate('click');
       expect(handlerDelete).toHaveBeenCalledWith(demoToDos[0].id)
       
   });
   test('should call fucntion toggle', () => {
    wrapper.find('p').simulate('click');
    expect(handlerToggle).toHaveBeenCalledWith(demoToDos[0].id)
       
   });
   test('should show text correctly', () => {
       const p = wrapper.find('p');
       expect(p.text().trim()).toBe(`1. ${demoToDos[0].desc}`)
       
   });
   test('should have get class delete', () => {
       const todo = demoToDos[0];
       todo.done = true;
    const wrapper = shallow(<ToDoListItem 
        toDO={todo}
    />);
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
    
    });
    
});
