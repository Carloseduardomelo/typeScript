//! consta com os 10 reais a mais.

import DioAccount from "./DioAccount";

export default class Account10 extends DioAccount{
    constructor(name:string , age:number , id:number, cpf:number, status:boolean){
        super(name , age , id , cpf , status)
    }
    //! logica dos 10 reais a mais.
    deposito = (quantidade: number) =>{
        if(this.getSaldo() < quantidade){
            console.log('Voçe não tem saldo suficiente')
        }else{
            this.setSaldo( quantidade + 10 )//! fiz dessa forma para ficar simple e funcional
            console.log(`deposito de ${quantidade} feito com suceso, Saldo atual e de ${this.getSaldo()}`)
        }
    }
}