import React from 'react'
const { mount } = require("enzyme");
const { UserContext } = require("../../../components/09-useContex/UserContext");
const { LoginScreen } = require("../../../components/09-useContex/LoginScreen");

describe('Tests loginScreen', () => {
    const setUser = jest.fn();
    const wrapper = mount(<UserContext.Provider value={{
        setUser
    }}>
        <LoginScreen />
    </UserContext.Provider>)
   test('should show correctly', () => {
       expect(wrapper).toMatchSnapshot();
   });
    test('should call setUser', () => {
        wrapper.find('button').prop('onClick')();
       expect(setUser).toHaveBeenCalledWith({id: 123456, name: 'rey'});
    });
    
});
