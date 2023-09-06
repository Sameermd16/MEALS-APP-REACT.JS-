import React from "react";
import { useGlobalContext } from "../AppContext";

export default function Modal() {

    const { showModal, setShowModal, selectedMeal } = useGlobalContext()

    const { 
        strMeal: title, 
        strMealThumb: image, 
        strInstructions: instructions, 
        strSource: source 
    } = selectedMeal

    if(showModal) {
        return (
            <section className='modal_overlay'>
                <div className='modal_div'>
                    <img src={image} alt={title} width='100%' />
                    <div className="modal_content p-3">
                        <h4> {title} </h4>
                        <p> cooking instructions: </p>
                        <p> {instructions} </p>
                        <a href={source} target='_blank'> Original Source </a> <br />
                        <button onClick={() => setShowModal(false)} className='btn btn-danger btn-sm'>close</button>
                    </div>
                </div>
            </section>
        )
    }
}
                                               