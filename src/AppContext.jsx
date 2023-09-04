import React, { createContext, useContext } from 'react'

export const AppContext = createContext()


export function AppProvider({ children }) {
    const state = {
        value: 10,
        lessCost: 5
    }
    return (
        <AppContext.Provider value={state}>
            { children }
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}