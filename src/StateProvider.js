import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Building the provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
