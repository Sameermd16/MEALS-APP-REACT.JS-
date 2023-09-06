import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useGlobalContext } from '../AppContext'

export default function Search() {

    const { setSearchTerm, fetchRandomMeals } = useGlobalContext()

    const [searchInput, setSearchInput] = useState('')
    // console.log(searchInput)


    function handleSubmit(e) {
        e.preventDefault()
        if(searchInput) {
            setSearchTerm(searchInput)
            setSearchInput('')
        }
    }

    function handleRandomMeal() {
        setSearchTerm('')
        setSearchInput('')
        fetchRandomMeals()
    }


    return (
        <div className='m-5 d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='d-flex gap-2'>
                <input 
                    type='text'
                    placeholder='search food'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className='btn btn-outline-primary btn-sm'>search</button>
                <button type="button" className='btn btn btn-outline-primary btn-sm'
                    onClick={handleRandomMeal}
                >surprise me!</button>
            </form>
        </div>
    )
}