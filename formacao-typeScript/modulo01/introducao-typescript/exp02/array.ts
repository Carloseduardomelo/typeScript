interface items {
    id: number
    name: string
    age: number
}

//! existem muitas formas de tipar objetos mais essas são as tres principais formas

//? 01
const a: items = {id: 1 , age: 17 , name: 'carlos'} // Aqui uma tipagen direta

//? 02
const b = {id: 1 , age: 17 , name: 'carlos'} as items // Aqui ele vai forças a tipage 

//? 03
const c = {id: 1 , age: 17 , name: 'carlos'} satisfies items // Aqui e a junção dos tres formas

console.log(a , b, c)




const arrra:number[] = [1 , 3, 6 ,1, 0]

console.log(Math.max(...arrra))