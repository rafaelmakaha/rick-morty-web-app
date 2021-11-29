import React from 'react'

import { Title } from './style'

interface IMainTitle {
    children: React.ReactNode
}

const MainTitle: React.FC<IMainTitle> = ({ children }) => (
    <Title>{children}</Title>
)

export default MainTitle
