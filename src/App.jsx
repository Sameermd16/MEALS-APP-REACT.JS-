import React, { useContext, useState } from 'react'
import { AppProvider } from './AppContext'

import './App.css'
import Meals from './components/Meals'

function App() {


  return (
    <AppProvider>
      <Meals />
    </AppProvider>
  )
}

export default App
