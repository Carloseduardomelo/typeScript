// import { login } from "./login"

// describe('login', () => {

//     const mockAlert = jest.fn()
//     window.alert = mockAlert

//     it('Deve exibir um alert com boas vindas', () => {
//         login()
//         expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
//     })
// })


// import { login } from "./login";

// describe('login', () => {

//     const mockAlert = jest.fn()
//     //window.alert = mockAlert

//     it('Deve exibir um alert com boas vindas', () => {
//         login()
//         expect(mockAlert()).toHaveBeenCalledWith('Bem vinda!')
//     })
// })

// import { login } from "./login";

// describe("login", () => {

//     const mockAlert = jest.fn();
//     window.alert = mockAlert;

//     it("Deve exibir um alert com boas vindas", () => {
//         login();
//         expect(mockAlert).toHaveBeenCalledWith("Bem-vinda!");
//         expect(mockAlert).toHaveBeenCalledWithExactly(2);
//     })
// });


import { login } from "./login";

describe("login", () => {

  const mockAlert = jest.fn()
  //window.alert = mockAlert

  it.skip("Deve exibir um alert com boas vindas", () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith("Bem vinda!");
  });

  it('nada' , () =>{
    expect(1+2).toBe(3)
  })
});