import React from 'react';
const { shallow } = require("enzyme");
const { RealRef } = require("../../../components/04-useRef/RealRef");

describe('Test RealExampleRef component', () => {
    const wrapper = shallow(<RealRef />);
    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });
    test('should show correctly the component', () => {
       wrapper.find('button').simulate('click');
       expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
    
})
