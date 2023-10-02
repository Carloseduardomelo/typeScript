import { Api } from "../api"

interface IpropsInfs{
    email:string
    password:string
}


export const Login = async ({email , password}:IpropsInfs): Promise<void> =>{

    const data:any = await Api
    console.log(data)

    if(email !== data.email && password !== data.senha){
        alert('senha invalida ou email invalido')
    }else if(email === data.email && password === data.senha){
        alert(`login feito com sucesso, bem vindo(a) ${data.name}`)
    }else{
        console.log('nada')
    }
}