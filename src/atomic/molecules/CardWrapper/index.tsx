import React from "react";
import ItemCard from "../ItemCard";
import { Wrapper } from "./style";

interface ICardWrapper {
    children: React.ReactNode
}

const CardWrapper: React.FC<ICardWrapper> = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default CardWrapper