import Account from "./Acont";

export default class Pessoa_F extends Account{
    doc_id: number;

    constructor(name:string , cpf:number , id:number, age:number , doc_id:number){
        super(name , id , cpf , age)
        this.doc_id = doc_id
    }
}