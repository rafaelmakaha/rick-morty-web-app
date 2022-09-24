import { createGlobalStyle } from 'styled-components'
import Schwifty from '../assets/fonts/schwifty.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${({ theme }) => theme.titleFontFamily};
    src: url(${Schwifty}) format('truetype');
  }

  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.brown};
      border-radius: 10px;
      background-clip: padding-box;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.greenUgly};
      border-radius: 10px;
      background-clip: padding-box;
    }
  }
`
