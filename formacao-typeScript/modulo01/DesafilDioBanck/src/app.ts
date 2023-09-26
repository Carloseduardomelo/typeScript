import Account10 from "./class/Account10";
import CompanyAccount from "./class/CompanyAccount";
import PeopleAccount from "./class/PeopleAccount";



const Account01 = new Account10('carlos' , 172647236 , 1 , 17 ,true)
Account01.deposito(110)
Account01.sacar(100)
console.log(Account01.GetAll())
Account01.SetName('dio')
console.log(Account01.GetAll())

//! ------------------------------------------------- !//

const CompanyAccount01:CompanyAccount = new CompanyAccount('java' , 2 , 12729537, 5 , true)
CompanyAccount01.deposito(100)
CompanyAccount01.sacar(90)
CompanyAccount01.pegar_Empre(500)
console.log(CompanyAccount01.GetAll())
CompanyAccount01.SetName('javascript')
console.log(CompanyAccount01.GetAll())


//! ------------------------------------------------- !//

const PeopleAccount01:PeopleAccount = new PeopleAccount('python' , 3 , 15264572 , 19 , 1248465309523, true)
PeopleAccount01.deposito(100)
PeopleAccount01.sacar(90)
console.log(PeopleAccount01.GetAll())
PeopleAccount01.SetName('lua')
console.log(PeopleAccount01.GetAll())