import React, {createContext, useReducer, useContext} from 'react';
import {reducer, initialState} from '../reducers/catReducer';

const GlobalStore = createContext();

const Context = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStore.Provider value={{state, dispatch}}>
      {children}
    </GlobalStore.Provider>
  );
};

export const DataProvider = () => useContext(GlobalStore);

export default Context;
