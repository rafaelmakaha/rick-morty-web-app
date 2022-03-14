import React from 'react'
import { ICharacter } from '../../../services/types'
import CardTitle from '../../atoms/CardTitle'
import ItemDescription from '../../atoms/ItemDescription'
import { Container, Image } from './style'

export interface IItemCard {
  testID?: string
  color?: string
  char: ICharacter
}

const ItemCard: React.FC<IItemCard> = ({
  color,
  testID = 'ItemCard',
  char
}) => (
  <Container color={color}>
    <CardTitle>{char?.name}</CardTitle>
    <ItemDescription>{char?.status}</ItemDescription>
    <ItemDescription>{char?.species}</ItemDescription>
    <ItemDescription>{char?.gender}</ItemDescription>
    <Image alt={char?.name} src={char?.image} />
  </Container>
)

export default ItemCard
