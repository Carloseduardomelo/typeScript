import { Box } from "@chakra-ui/react"

interface IUprops{
    name: string
    descrip: string
}

const Cards = (props:IUprops) =>{
    return(
        <Box width={'100%'} height={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
            <Box width={'30%'} height={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'10px'} color={'blue'} style={{border: '1px solid white' , borderRadius: '20px'}}>
                <h1>{props.name}</h1>
                <p>{props.descrip}</p> 
            </Box>
        </Box>
    )
} 

export default Cards