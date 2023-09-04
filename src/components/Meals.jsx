import { useGlobalContext } from "../AppContext"


export default function Meals() {
    
    const  { value }  = useGlobalContext()

    return (
        <div>this is meals compo: {value} </div>
    )
}