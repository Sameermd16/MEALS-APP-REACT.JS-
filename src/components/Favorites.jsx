import { useGlobalContext } from "../AppContext"


export default function Favorites() {

    const { favorites, removeFavorite } = useGlobalContext()

    return (
        <main style={{margin: "30px 0", background: "rgba(0, 0, 0, 0.851)", padding: '15px', height: '160px' }}>
        <h5 className='text-white ps-2' >Favorites</h5>
        <section className='fav_container'>
            {
                favorites.map((item) => {
                    const { strMeal: title, strMealThumb: image, idMeal: id } = item
                    return (
                        <div key={id} className='d-flex flex-column align-items-center'>
                            <img className='border border-white border-2' src={image} alt={title} width="50px" style={{borderRadius: '50%'}} />
                            <p className='text-white text-center mb-0'> {title} </p>
                            <button className='btn btn-sm text-white btn-outline-secondary' onClick={() => removeFavorite(id)}>remove</button>
                        </div>
                    )
                })
            }
        </section> 
        </main>
    )
}
