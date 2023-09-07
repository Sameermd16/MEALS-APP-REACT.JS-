import React, { useContext, useState } from 'react'
import { AppProvider } from './AppContext'
import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'
import Modal from './components/Modal'
import Favorites from './components/Favorites'

function App() {


  return (
    <AppProvider>
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </AppProvider>
  )
}

export default App
