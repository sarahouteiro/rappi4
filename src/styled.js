import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
        margin-top: 150px;
        background-color: #EEEEEE;
        div{
            width: 375px;
            height: 667px;
            margin: 0 auto;
            background-color: white;
        }
        @media (max-width: 500px) {
            margin: 0 auto;
            width: 100%;
            height: 100%;
        }
    }
`

