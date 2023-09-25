export default abstract class Account{
    name: string;
    cpf: number;
    id: number;
    age: number;
    saldo: number = 0;

    constructor(name:string , cpf:number , id:number, age:number){
        this.name = name
        this.cpf = cpf
        this.id = id
        this.age = age
    }

    deposito = (quantidade: number) =>{
        this.saldo += quantidade
        console.log(`Seu saldo e: ${this.saldo}`)
    }

    sacar = (quantidade:number) => {
        if(this.saldo < quantidade){
            console.log('voce não tem saldo suficiente para sacar esse valor')
        }else{
            this.saldo -= quantidade
            console.log(`saque de ${quantidade} foi feito com sucesso \n Seu saldo atual e de:  ${this.saldo}`)
        }
    } 
}