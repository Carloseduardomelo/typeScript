import DioAccount from "./DioAccount";

export default class PeopleAccount extends DioAccount{
    doc_id: number; //? documento da pessoa.

    constructor(name:string , cpf:number , id:number, age:number , doc_id:number , status:boolean){
        super(name , id , cpf , age, status)
        this.doc_id = doc_id
    }
}