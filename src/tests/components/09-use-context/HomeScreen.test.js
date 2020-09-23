import React from 'react';
import { UserContext } from '../../../components/09-useContex/UserContext';
const { mount } = require("enzyme");
const { HomeScreen } = require("../../../components/09-useContex/HomeScreen");

describe('Tests on HomeScreen', () => {
    const user = {
        name: 'benny',
        email: 'bennytescha@gmail.com'
    }
    const wrapper = mount(<UserContext.Provider value={{
     user
    }}>
            <HomeScreen />
         </UserContext.Provider>)
   test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot(); 
   });
    
});
