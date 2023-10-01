import { useState } from "react"
import {
    ChakraBaseProvider,
    Input,
    Stack,
    Flex,
    Text,
    Box
} from "@chakra-ui/react"

import './style.css'
import ButtonCompo from "../button"
import { ButtonAlert } from "../../assets/button"
import Header from "../hearder"

const InputCard = () => {

    return (
        <ChakraBaseProvider>
            <Box width={'100vw'} height={'100vh'}>
                <Box width={'100%'} height={'10%'}>
                    <Header />
                </Box>
                <Box width={'100%'} height={'90%'} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={'20px'}>
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
                                    maxLength={50} />

                                <Input
                                    placeholder='password'
                                    size='lg'
                                    type="password"
                                    border={`1px`}
                                    borderColor={"blue.700"}
                                    borderRadius={`5px`}
                                    p={`2`}
                                    width={`70%`}
                                    minLength={6} />

                                <ButtonCompo onClick={ButtonAlert} />
                            </Flex>
                        </form>

                    </Stack>
                </Box>
            </Box>

        </ChakraBaseProvider>

    )
}

export default InputCard