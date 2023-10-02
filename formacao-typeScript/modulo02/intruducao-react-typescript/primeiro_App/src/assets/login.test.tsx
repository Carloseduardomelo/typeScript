import { Login } from "./login"

describe('teste login' , () =>{
    const mok = jest.fn()
    window.alert = mok

    it.skip('teste mok', () =>{
        Login({email: 'carlos' , password: '1234567'})
        expect(mok).toHaveBeenCalledWith('kakakqak')
    })
})