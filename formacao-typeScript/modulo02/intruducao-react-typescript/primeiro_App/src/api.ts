const Conta = {
    email: 'carlos@gmail.com',
    senha: '123456',
    name: 'carlos',
    age: 17
}

export const Api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Conta)
    }, 3000)
})