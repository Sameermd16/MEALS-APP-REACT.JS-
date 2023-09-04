import { useState } from "react"
import { useGlobalContext } from "../AppContext"
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from 'react-icons/bs'

export default function Meals() {

    const [isFavorite, setIsFavorite] = useState(false)
    

    const { meals, loading }  = useGlobalContext()
    console.log(meals)

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='container m-auto row m-5 gap-4'>
            {
                meals.map((object) => {
                    const { idMeal: id, strMeal: title, strMealThumb: image } = object
                    return (
                        <div key={id} className='col shadow'>
                            <img src={image} alt={title} width='200px' />
                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                <h5> {title} </h5>
                                <BsHandThumbsUp />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}