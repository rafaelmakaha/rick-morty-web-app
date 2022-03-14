import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;
  }
`
