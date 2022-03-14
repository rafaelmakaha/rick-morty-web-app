import React from 'react'
import { Wrapper } from './style'

export interface ICardWrapper {
  testID?: string
  children: React.ReactNode
}

const CardWrapper: React.FC<ICardWrapper> = ({
  testID = 'CardWrapper',
  children
}) => <Wrapper>{children}</Wrapper>

export default CardWrapper
