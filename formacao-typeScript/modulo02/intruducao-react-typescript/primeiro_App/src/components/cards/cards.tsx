import { Box, Button, Text } from "@chakra-ui/react"
import Header from "../hearder"
import useGetApi from "../../hooks/useGetApi"

interface IpropsData{
    email: string | undefined 
    password?: string  | undefined
    name: string | undefined
    age: number | undefined
    horas: string | undefined
    saldo: number | undefined

}


const Cards = (props:IpropsData)  => {
    
    return (
        <Box w={`100vw`} h={`100vh`}>
            <Box width={"full"} height={`10%`} backgroundColor={`blue.700`}>
                <Header />
            </Box>
            <Box width={`full`} height={`90%`} alignItems={"center"} justifyContent={"center"}>
                <Box width={'100%'} height={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={30}>
                    <Box width={'30%'} height={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'10px'} color={'blue'} style={{ border: '1px solid white', borderRadius: '20px' }}>
                        <Text fontSize={30} fontFamily={"monospace"}>{`Bem vindo ${props?.name}`}</Text>
                        <Box width={"100%"} height={'50%'} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"} textAlign={"left"} gap={14} fontSize={20} paddingLeft={130}>
                            <p>{`email: ${props?.email}`}</p>
                            <p>{`Saldo: ${props?.saldo}`}</p>
                            <p>{`Hora visto utima: ${props?.horas}`}</p>
                            <p>{`Age: ${props?.age}`}</p>
                        </Box>
                        <p>{props?.email}</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Cards