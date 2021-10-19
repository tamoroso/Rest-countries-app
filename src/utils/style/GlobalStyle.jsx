import { createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    
    html body {
        box-sizing : border-box;
        padding : 0;
        margin: 0;
        font-family : 'Nunito Sans', sans-serif;
        font-size : 0.875rem;
        color: ${({ theme }) => theme.text};
    }
    h1{
        font-size : 1.5rem;
    }

`
