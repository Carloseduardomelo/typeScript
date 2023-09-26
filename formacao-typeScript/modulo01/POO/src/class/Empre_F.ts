import Account from "./Acont"

export default class Empresa extends Account{
    private quant_empre: number = 1000

    constructor(name:string , cpf:number , id:number, age:number){
        super(name , id , cpf , age)
    }

    pegar_Empre = (quantidade:number) =>{
        if(this.quant_empre < quantidade){
            console.log('voce não tem esse limete para fazer esse emprestimo')
        }else{
            this.quant_empre -= quantidade
            console.log(`voce fez um emprestimo de: ${quantidade} e ficol com com o saldo de emprestimo de ${this.quant_empre}`)
        }
    }
}
