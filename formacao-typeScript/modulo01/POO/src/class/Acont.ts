export default abstract class Account{
    private name: string;
    private cpf: number;
    readonly id: number;
    private age: number;
    private saldo: number = 0;
    private status: boolean = true

    constructor(name:string , cpf:number , id:number, age:number){
        this.name = name
        this.cpf = cpf
        this.id = id
        this.age = age
    }

    SetName = (name:string): void => {
        this.name = name
    }
    GetAll = ():any => {
        return {
            name:this.name,
            age:this.age,
            cpf:this.cpf,
            id:this.id, 
            saldo:this.saldo
        }
    }

    deposito = (quantidade: number) =>{
        if(this.VerificarConst()){
            this.saldo += quantidade
            console.log(`Seu saldo e: ${this.saldo}`)
        }else{
            return console.log('deposito naõ exetuado, sua consta ta envalida')
        }

    }

    sacar = (quantidade:number) => {
        if(this.VerificarConst()){
            if(this.saldo < quantidade){
                console.log('voce não tem saldo suficiente para sacar esse valor')
            }else{
                this.saldo -= quantidade
                console.log(`saque de ${quantidade} foi feito com sucesso \n Seu saldo atual e de:  ${this.saldo}`)
            }
        }else{
            console.log('saque não exetuuado, sua consta ta envalida')
        }
        
    }
    
    private VerificarConst = ():boolean =>{
        if(this.status){
            return this.status
        }
        
        throw new Error('Erro sua consta ta envalida')
        
    }
}