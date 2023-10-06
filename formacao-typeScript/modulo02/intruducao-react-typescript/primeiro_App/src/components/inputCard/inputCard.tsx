import { useState } from "react"

import {
    ChakraBaseProvider,
    Input,
    Stack,
    Flex,
    Text,
    Box,
    Button
} from "@chakra-ui/react"

import './style.css'
import ButtonCompo from "../button"
import Header from "../hearder"
import useGetApi from "../../hooks/useGetApi"




const InputCard = () => {

    const [ email , setEmail ] = useState<string>('')
    const [ password , setPassword ] = useState<string>('')
    const { Data } = useGetApi()

    function Login(_arg: { email: string; password: string }): string {
        throw new Error("Function not implemented.")
    }

    return (
        <ChakraBaseProvider>
            <Box width={'100vw'} height={'100vh'} backgroundColor={'darkgrey'}>
                <Box width={'100%'} height={'10%'}>
                    <Header />
                </Box>
                <Box width={'100%'} height={'90%'} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={'20px'}>
                {Data === null || Data === undefined?  <Button isLoading loadingText='Loading' colorScheme='teal' variant='outline'spinnerPlacement='end'>Continue</Button>:
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
                                    maxLength={30} 
                                    value={email}
                                    onChange={(events) => setEmail(events.target.value)}/>

                                <Input
                                    placeholder='password'
                                    size='lg'
                                    type="password"
                                    border={`1px`}
                                    borderColor={"blue.700"}
                                    borderRadius={`5px`}
                                    p={`2`}
                                    width={`70%`}
                                    minLength={6}
                                    maxLength={12}
                                    value={password}
                                    onChange={(events) => setPassword(events.target.value)}/>

                                <ButtonCompo onClick={() => Login({email: email , password:password})} />
                            </Flex>
                        </form>

                    </Stack>
                    }
                </Box>
            </Box>

        </ChakraBaseProvider>

    )
}

export default InputCard