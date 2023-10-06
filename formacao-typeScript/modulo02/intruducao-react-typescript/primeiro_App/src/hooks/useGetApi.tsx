import { useEffect, useState } from "react"
import { Api } from "../api"


export interface IDAta{
    email: string
    password: string
    name: string
    age: number
    horas: string
    saldo: number
    id: number | undefined
}

const useGetApi = () =>{
    const [ Data , setData ] = useState<IDAta>() 
    
    useEffect(() => {
    
        const getApi = async () =>{
            const data:IDAta | any = await Api
            setData(data)
        }
        getApi()
    },[Data])

    return{
        Data,
        setData
    }
}

export default useGetApi