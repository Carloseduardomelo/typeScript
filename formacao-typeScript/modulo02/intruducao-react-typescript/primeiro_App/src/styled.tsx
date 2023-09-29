import { createGlobalStyle , styled } from "styled-components"

export const StyleApp = styled.div`
    width: 100lvw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    border: 1px solid black;

`




export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: darkgrey;
    }
`