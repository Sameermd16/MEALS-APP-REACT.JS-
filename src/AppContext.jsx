import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealsURL = "https://www.themealdb.com/api/json/v1/1/random.php"

export function AppProvider({ children }) {
    
    const [meals, setMeals] = useState([])
    // console.log(meals)
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(meals) 
    // console.log(selectedMeal)
    const [favorites, setFavorites] = useState([]) 
    console.log(favorites)

    const props = { 
        meals, 
        loading, 
        setSearchTerm, 
        fetchRandomMeals, 
        showModal, 
        selectMeal, 
        setShowModal, 
        selectedMeal,
        addToFavorites,
        favorites,
        removeFavorite
    }

    async function fetchData(url) {
        setLoading(true)
        try {
            const {data} = await axios.get(url)  
            // console.log(data.meals)
            //response from axios is more complex than fetch method
            // const response = await fetch("https://randomuser.me/api/")
            // const data = await response.json()
            // console.log(data)
            if(data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([]) 
            }
        } catch(error) {
            console.log(error.response)
        }
        setLoading(false)
    }

    useEffect(() => {
        // console.log('appcontext -> useeffect ran')
        fetchData(allMealsURL)
    }, [])

    useEffect(() => {
        if(!searchTerm) return 
        fetchData(`${allMealsURL}${searchTerm}`)
    }, [searchTerm])

    function fetchRandomMeals() {
        fetchData(randomMealsURL)
    }

    function selectMeal(id) {
        let meal
        meal = meals.find((item) => {
            return item.idMeal === id 
        })
        setSelectedMeal(meal)
        setShowModal(true)
        console.log(meal)
        // console.log(selectedMeal)
    }

    function addToFavorites(id) {
        const meal = meals.find((item) => {
            return item.idMeal === id 
        })
        // console.log(meal)
        // setFavorites([...favorites, meal])
        // console.log(favorites)
        const alreadyFavorite = favorites.find((item) => {
            return item.idMeal === id 
        })
        // console.log(alreadyFavorite)  
        if(alreadyFavorite) return 
        const updatedFavorites = [...favorites, meal]
        console.log(updatedFavorites)
        setFavorites(updatedFavorites)
        // localStorage.setItem('favorites', updatedFavorites.join())
    }

    function removeFavorite(id) {
        const filteredFav = favorites.filter((item) => {
            return item.idMeal !== id 
        })
        setFavorites(filteredFav)
    }

    return (
        <AppContext.Provider value={props}> 
            { children }
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
} 