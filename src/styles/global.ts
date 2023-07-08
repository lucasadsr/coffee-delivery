import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-500']};
    border-radius: 2px;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  body {
    background: ${(props) => props.theme.colors['gray-100']};
    
    font-weight: 400;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamily.roboto};

    line-height: 1.3;

    -webkit-font-smoothing: antialiased
  }
`
