// AppContext.js

import React, { createContext, useReducer, useContext } from 'react';

// Creamos el contexto de React
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

// Definimos tipos de acciones
const ActionTypes = {
  ADD_EVENT: 'ADD_EVENT',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  SELECT_EVENT: 'SELECT_EVENT',
};

// Creamos el proveedor del contexto
export const AppProvider = ({ children }) => {
  // Definimos el estado inicial
  const initialState = {
    events: [],
    notifications: [],
    selectedEvent: null,
  };

  // Definimos el reducer para actualizar el estado
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD_EVENT:
        return { ...state, events: [...state.events, action.payload] };
      case ActionTypes.ADD_NOTIFICATION:
        return { ...state, notifications: [...state.notifications, action.payload] };
      case ActionTypes.SELECT_EVENT:
        return { ...state, selectedEvent: action.payload };
      default:
        return state;
    }
  };

  // Creamos el estado y el dispatch usando useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Retornamos el proveedor con el contexto y el estado
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
