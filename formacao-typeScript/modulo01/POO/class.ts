type user ={
    name: string
    age: number
    InfName: () => void | string
}

class User{
    name
    age
    constructor(name:string ,age:number){
        this.name = name
        this.age = age
    }

    Inf = () =>{
        console.log(`${this.name} \n ${this.age}`)
    }
}


const user01 = new User("carlos", 17)

user01.Inf()

