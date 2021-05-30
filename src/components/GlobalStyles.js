import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
    h2{
        font-size: 2.4rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.25rem;
        color: #333;
        padding:1rem 0;
    }
    p{
        font-size: 1rem;
        color:#696969;
        line-height: 1.5;
        padding-bottom: 0.5rem;
    }
    a{
        text-decoration:none;
        color: #333;
    }
    img{
        display:block
    }
    input{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

`

export default GlobalStyles