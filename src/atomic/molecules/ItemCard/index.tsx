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
    <Image alt={char?.name} src={char?.image} />
    <CardTitle>{char?.name}</CardTitle>
  </Container>
)

export default ItemCard
