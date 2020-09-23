import React from 'react';
import { shallow, mount } from 'enzyme';
import { TooDoApp } from '../../../components/08-useReducer/TooDoApp';
import { demoToDos } from '../../fixtures/demoToDos';
import { act } from '@testing-library/react';
describe('tests on <TooDoApp />', () => {
    const wrapper = shallow(<TooDoApp />); // da información general del componente
    Storage.prototype.setItem = jest.fn(() => {}); // to simulate stogare
    test('should show correctly', () => {
       expect(wrapper).toMatchSnapshot(); 
    });
    test('should add a toDo', () => {
    //    const wrapper = mount(<TooDoApp />); // da más información del componente y sus hijos
      act(() => {
           // wrapper.find('ToDoAdd').prop('handlerAddToDo');
            // console.log('compo: ', wrapper.find('ToDoAdd'))
        });
      //   expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
    test('should delete a toDo', () => {
       //  wrapper.find('ToDoAdd').prop('handlerAddToDo')(demoToDos[0]);
        // wrapper.find('ToDoList').prop('handlerDelete')(demoToDos[0].id);
        // check because no work
        // expect(wrapper.find('h1').text().trim()).toBe('ToDoApp ( 0 )')

    });
    
    
})
