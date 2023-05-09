import React, { createContext, useContext, useReducer } from 'react'
import { initialState, AuthReducer } from './reducer';

const AuthContext = createContext();
const AuthDispatch = createContext();



export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        console.log("useAuthContext must be wrapped inside AuthProvider")
        return context;
    };
};

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatch)
    if (context === undefined) {
        console.log("useAuthDispatch must be wrapped inside AuthProvider")
    } 
    return context;
};


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <AuthContext.Provider value={state}>
            <AuthDispatch.Provider value={dispatch}>
                {children}
            </AuthDispatch.Provider>
        </AuthContext.Provider>
    );
};