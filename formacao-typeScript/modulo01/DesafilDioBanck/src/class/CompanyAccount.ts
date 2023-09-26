import DioAccount from "./DioAccount"

export default class CompanyAccount extends DioAccount{
    private quant_empre: number = 1000 //! limite para fazer um emprsdimo
    

    constructor(name:string , cpf:number , id:number, age:number, status:boolean){
        super(name , id , cpf , age , status)
    }

    pegar_Empre = (quantidade:number) =>{
        if(this.getStatus()){
            if(this.quant_empre < quantidade){
                console.log('voce não tem esse limete para fazer esse emprestimo')
            }else{
                this.quant_empre -= quantidade
                console.log(`voce fez um emprestimo de: ${quantidade} e ficol com com o saldo de emprestimo de ${this.quant_empre}`)
            } 
        }else{
            throw new Error('Conta invalida')
        }

    }
}
