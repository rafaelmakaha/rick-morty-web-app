import React from 'react'
import { Wrapper } from './style'

export interface IMainGrid {
  testID?: string
  children: React.ReactNode
}

const MainGrid: React.FC<IMainGrid> = ({ testID = 'MainGrid', children }) => (
  <Wrapper>{children}</Wrapper>
)

export default MainGrid
