import React from "react"
import { Text } from "./style"

interface IItemDescription {
    children: React.ReactNode
}

const ItemDescription: React.FC<IItemDescription> = ({children}) => (
    <Text>
        {children}
    </Text>
)

export default ItemDescription