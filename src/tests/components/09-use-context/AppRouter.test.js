import React from 'react';
import { UserContext } from '../../../components/09-useContex/UserContext';
import { AppRouter } from '../../../components/09-useContex/AppRouter';
const { mount } = require("enzyme");

describe('Test on AppRouter', () => {
    const user = {
        id: 1,
        name: 'Lili'
    }
   const wrapper = mount(<UserContext.Provider value={{
       user
   }}>
       <AppRouter />
   </UserContext.Provider>)
   test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot(); 
   });
   
});
