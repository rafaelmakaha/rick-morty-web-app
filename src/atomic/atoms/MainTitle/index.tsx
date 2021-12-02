import React from 'react'

import { Title } from './style'

export interface IMainTitle {
    testID?: string
    children?: React.ReactNode
}

const MainTitle: React.FC<IMainTitle> = ({ testID = 'MainTitle', children }) => (
    <Title>{children}</Title>
)

export default MainTitle
