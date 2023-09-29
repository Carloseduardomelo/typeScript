import { StyleCard } from "./style"

interface IpropsCard{
    numb: number
}

const Card = (props:IpropsCard) =>{
    return(
        <StyleCard >
            <h1>card {props.numb}</h1>
            <p>ese card e o meu carde</p>
        </StyleCard>
    )
}

export default Card