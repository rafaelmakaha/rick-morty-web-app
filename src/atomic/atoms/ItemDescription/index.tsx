import React from "react"
import { Text } from "./style"

export interface IItemDescription {
    testID?: string,
    children: React.ReactNode
}

const ItemDescription: React.FC<IItemDescription> = ({ testID = 'ItemDescription', children}) => (
    <Text>
        {children}
    </Text>
)

export default ItemDescription