import React, { useContext, useState } from 'react'
import { AppProvider } from './AppContext'
import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'
import Modal from './components/Modal'

function App() {


  return (
    <AppProvider>
      <Search />
      <Meals />
      <Modal />
    </AppProvider>
  )
}

export default App
