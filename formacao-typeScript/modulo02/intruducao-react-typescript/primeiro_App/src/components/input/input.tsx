import { useState } from "react"
import { 
    ChakraBaseProvider, 
    Input, 
    Stack, 
    Flex,
    Button, 
    ButtonGroup,
    Text,
    } from "@chakra-ui/react"

    import './style.css'

const Inputtela = () => {

    const [ dados , setDados ] = useState([''])
    console.log(dados)

    return (
        <ChakraBaseProvider>
            <Stack spacing={3} 
            border={`1px`} 
            borderColor={`white`} 
            width={`30%`} 
            color={`beige`} 
            h={`40%`} 
            borderRadius={10} 
            overflow={"hidden"} 
            alignItems={"center"} 
            justifyContent={"center"}>
                <form action="" className="form">
                    <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} h={`100%`} gap={6}>
                    <Text color={`blue`} fontSize={`26px`}>Login</Text>
                    <Input 
                    placeholder='emall' 
                    size='lg' 
                    type="email" 
                    border={`1px`} 
                    borderColor={"blue.700"} 
                    borderRadius={`5px`} 
                    p={`2`} 
                    width={`70%`} 
                    onChange={e => setDados(e.target.value)}
                    maxLength={50}/>

                    <Input 
                    placeholder='password' 
                    size='lg' 
                    type="password" 
                    border={`1px`} 
                    borderColor={"blue.700"} 
                    borderRadius={`5px`} 
                    p={`2`} 
                    width={`70%`}
                    minLength={6}/>

                    <Button colorScheme='blue' backgroundColor={"blue.600"} w={`50%`} h={`40px`} borderRadius={10} color={`white`} type="submit">Button</Button>
                </Flex>
                </form>
                
            </Stack>
        </ChakraBaseProvider>

    )
}

export default Inputtela