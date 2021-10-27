import { createGlobalStyle } from "styled-components"
import { device } from "./device"

export const GlobalStyle = createGlobalStyle`    
    html body {
        box-sizing : border-box;
        padding : 0;
        margin: 0;
        font-family : 'Nunito Sans', sans-serif;
        font-size : 0.875rem;
        color: ${({ theme }) => theme.text};
        min-height : 100vh;
        background : ${({ theme }) => theme.body}
    }
    h1{
        font-size : 1.3rem;

        @media ${device.tablet}{
            font-size : 1rem;
        }
    }

`
