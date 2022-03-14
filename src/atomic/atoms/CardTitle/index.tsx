import React from 'react'

import { Title } from './style'

export interface ICardTitle {
  testID?: string
  children?: React.ReactNode
}

const CardTitle: React.FC<ICardTitle> = ({
  testID = 'CardTitle',
  children
}) => <Title>{children}</Title>

export default CardTitle
