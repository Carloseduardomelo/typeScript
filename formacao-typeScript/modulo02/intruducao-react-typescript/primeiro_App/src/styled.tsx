import { createGlobalStyle , styled } from "styled-components"

export const StyeleApp1 = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const StyeleHearder = styled.div`
    width: 100%;
    height: 10%;
`

export const StyleApp = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

`




export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: darkgrey;
    }
`