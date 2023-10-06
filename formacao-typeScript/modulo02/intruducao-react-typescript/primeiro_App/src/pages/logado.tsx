import Cards from "../components/cards/cards"
import useGetApi from "../hooks/useGetApi"
import { useParams , useNavigate } from "react-router-dom"

const Logado = () =>{
    const { Data } = useGetApi()

    const { id } = useParams()
    const nave = useNavigate()

    console.log(id)
    console.log(Data?.id)

    return(
        <Cards name={Data?.name} email={Data?.email} saldo={Data?.saldo} horas={Data?.horas} age={Data?.age}/>
    )
}

export default Logado