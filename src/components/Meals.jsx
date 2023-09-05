import { useState } from "react"
import { useGlobalContext } from "../AppContext"
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from 'react-icons/bs'

export default function Meals() {

    // const [isFavorite, setIsFavorite] = useState(false)
    
    const { meals, loading }  = useGlobalContext()
    // console.log(meals)

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='container m-auto row m-5 gap-4'>
            {
                meals ? (
                    meals.map((object) => {
                        const { idMeal: id, strMeal: title, strMealThumb: image } = object
                        return (
                            <div key={id} className='col shadow' style={{maxWidth: '300px'}}>
                                <img src={image} alt={title} width='100%' />
                                <div className='mt-3 d-flex align-items-center justify-content-between'>
                                    <h5> {title} </h5>
                                    <BsHandThumbsUp />
                                </div>
                            </div>
                        )
                    })
                ) : <h2>there are no meals </h2>
            }
        </section>
    )
}