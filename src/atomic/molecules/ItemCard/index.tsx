import React from "react";
import CardTitle from "../../atoms/CardTitle";
import ItemDescription from "../../atoms/ItemDescription";
import { Container } from "./style";

interface IItemCard {
    children: React.ReactNode
}

const ItemCard: React.FC<IItemCard> = () => (
    <Container>
        <CardTitle>
            Teste
        </CardTitle>
        <ItemDescription>
            Zeca
        </ItemDescription>
    </Container>
)

export default ItemCard