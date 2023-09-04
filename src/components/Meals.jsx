import { useGlobalContext } from "../AppContext"
import { BsHandThumbsUp } from 'react-icons/bs'

export default function Meals() {

    const { meals }  = useGlobalContext()
    console.log(meals)

    return (
        <section className='container-fluid row m-5 gap-4'>
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