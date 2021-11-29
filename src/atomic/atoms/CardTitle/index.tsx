import React from 'react'

import { Title } from './style'

interface ICardTitle {
    children: React.ReactNode
}

const CardTitle: React.FC<ICardTitle> = ({ children }) => (
    <Title>{children}</Title>
)

export default CardTitle
