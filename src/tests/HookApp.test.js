import '@testing-library/jest-dom';
import { HooksApp } from '../HooksApp';
import { shallow } from 'enzyme';
import React from 'react';

describe('HookAppTest', () => {
   test('should to beCorrectly HookApp', () => {

        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
       
   });
    
});
