import { Box , Center} from "@chakra-ui/react"


const Header = () =>{
    return(
        <Box background={"blue.700"} w={`full`} h={`100%`} color={"white"}>
            <Center fontSize={`25px`} w={"full"} h={`100%`} backgroundColor={"blue"} borderRadius={`0 0 30px 30px`}>
                Dio back
            </Center>
        </Box>
    )
}

export default Header