import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=A"
const randomMealsURL = "https://www.themealdb.com/api/json/v1/1/random.php"

export function AppProvider({ children }) {
    
    const [meals, setMeals] = useState([])
    console.log(meals)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('appcontext -> useeffect ran')
        async function fetchData(url) {
            setLoading(true)
            try {
                const {data} = await axios.get(url)  
                // console.log(data.meals)
                //response from axios is more complex than fetch method
                // const response = await fetch("https://randomuser.me/api/")
                // const data = await response.json()
                // console.log(data)
                if(data) {
                    setMeals(data.meals)
                } 
            } catch(error) {
                console.log(error.response)
            }
            setLoading(false)
        }
        fetchData(allMealsURL)
    }, [])

    return (
        <AppContext.Provider value={{ meals, loading, setLoading }}> 
            { children }
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}