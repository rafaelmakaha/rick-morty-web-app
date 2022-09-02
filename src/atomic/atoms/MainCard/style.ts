import styled from 'styled-components'
import { Div } from '../Div'

export const Background = styled(Div)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: absolute;
  width: 100vw;
`
