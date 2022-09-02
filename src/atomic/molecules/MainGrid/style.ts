import styled from 'styled-components'
import { Div } from '../../atoms/Div'

export const Wrapper = styled(Div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 12px;
  width: 60vw;
  height: 80vh;
  overflow-y: scroll;
`
