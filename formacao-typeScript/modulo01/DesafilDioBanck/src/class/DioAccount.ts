export default abstract class DioAccount{
    private name: string;
    private cpf: number;
    private id: number;
    private age: number;
    private saldo: number = 0;
    private status: boolean = true

    constructor(name:string , cpf:number , id:number, age:number , status:boolean){
        this.name = name
        this.cpf = cpf
        this.id = id
        this.age = age
        this.status = status
    }

    SetName = (name:string): void => {
        this.name = name
    }

    readonly setSaldo = (quantidade:number):void =>{
        this.saldo += quantidade
    }

    getSaldo = ():number => {
        return this.saldo
    }

    getStatus = ():boolean =>{
        return this.status
    }

    GetAll = ():any => {
        return {
            name:this.name,
            id:this.id, 
            age:this.age,
            cpf:this.cpf,
            saldo:this.saldo,
            status: this.status
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
                console.log(`saque de ${quantidade} foi feito com sucesso \n Seu saldo atual e de: ${this.saldo}`)
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