import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useGetApi from '../../hooks/useGetApi'

interface IpropsButon {
    onClick: () => void | any
    ok?: boolean
}

const ButtonCompo = (props: IpropsButon) => {

    const { Data } = useGetApi()
    return (
        <Link to={`/logado/${Data?.id}`} style={{width: `50%`, height: `40px`}}>
            <Button
                isDisabled={props.ok}
                colorScheme='blue'
                backgroundColor={"blue.600"}
                w={`100%`} h={`100%`}
                borderRadius={10}
                color={`white`}
                type="submit"
                onClick={props.onClick}>logar</Button>
        </Link>

    )
}

export default ButtonCompo