import React from 'react';
import { useFecth } from '../../../hooks/useFecth';
import { useCounter } from '../../../hooks/useCounter';
const { shallow } = require("enzyme");
const { MultipleCustomHooks } = require("../../../components/03-examples/MultipleCustomHooks");
jest.mock('../../../hooks/useFecth')
jest.mock('../../../hooks/useCounter')
describe('Tests MultipleCustomHooks', () => {
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })
   test('should to show correctly', () => {
       useFecth.mockReturnValue({
           data: null,
           loading: true,
           error: null
       });
       const wrapper = shallow(<MultipleCustomHooks />);
       expect(wrapper).toMatchSnapshot();
   })
   test('should to show Info', () => {
        useFecth.mockReturnValue({
            data: [
                {
                    author: 'lbenny',
                    quote: 'Heyy rey'
                }
            ],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Heyy rey');
        expect(wrapper.find('footer').text().trim()).toBe('lbenny')
   });
   
    
});
