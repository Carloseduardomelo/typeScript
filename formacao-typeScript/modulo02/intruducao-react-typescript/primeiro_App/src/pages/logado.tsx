import { Box, Center } from "@chakra-ui/react"
import Header from "../components/hearder"
import Cards from "../components/cards/cards"

const Logado = () =>{
    return(
        <Box w={`100vw`} h={`100vh`}>
            <Box width={"full"} height={`10%`} backgroundColor={`blue.700`}>
                <Header/>
            </Box>
            <Box width={`full`} height={`90%`} alignItems={"center"} justifyContent={"center"}>
                <Cards name={`carlos`} descrip={`Voce estar logado`}/>
            </Box>
        </Box>
    )
}

export default Logado