import React, { useContext, useState } from 'react'
import { AppProvider } from './AppContext'
import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'

function App() {


  return (
    <AppProvider>
      <Search />
      <Meals />
    </AppProvider>
  )
}

export default App
