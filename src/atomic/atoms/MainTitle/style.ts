import styled from 'styled-components'

export const Title = styled.h1`
  align-self: center;
  font-family: ${({ theme }) => theme.titleFontFamily};
  padding: 26px 0px;
  color: ${({ theme }) => theme.colors.blue};
  text-shadow: ${({ theme }) => theme.colors.black} 1px 0 1px,
    ${({ theme }) => theme.colors.toxicYellow} 1px 0 10px;
  font-size: 62px;
`
