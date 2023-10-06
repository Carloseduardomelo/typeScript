const Conta = {
    email: 'carlos@gmail.com',
    senha: '123456',
    name: 'carlos',
    age: 17,
    horas: Date().slice(15,25),
    saldo: ` R$: ${( Math.random() * 1000 ).toFixed(3)} `,
    id: 1
}

export const Api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Conta)
    },1000)
} )