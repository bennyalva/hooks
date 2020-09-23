
import React from 'react';
import { shallow } from 'enzyme';
import { ToDoAdd } from '../../../components/08-useReducer/ToDoAdd';
describe('Tests on <ToDoAdd></ToDoAdd>', () => {
    const ToDoAddSpy = jest.fn();
    const wrapper = shallow(<ToDoAdd 
        todoAdd={ToDoAddSpy}
        />);
    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should no call ToDoAddSpy', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(ToDoAddSpy).toHaveBeenCalledTimes(0);
    });
    test('should call ToDoAddSpy', () => {
        const value = 'Learn ionic';
        wrapper.find('input').simulate('change',{
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(ToDoAddSpy).toHaveBeenCalledTimes(1);
        expect(ToDoAddSpy).toHaveBeenCalledWith({
            type: 'add',
            payload: {
                id: expect.any(Number),
                desc: value,
                done: false,
            }
        });
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
})
