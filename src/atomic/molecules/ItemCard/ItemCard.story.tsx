import React from 'react'
import { Meta, Story } from '@storybook/react'
import ItemCard, { IItemCard } from '.'


export default {
  title: 'Molecules/ItemCard'
} as Meta

const Template: Story<IItemCard> = (args) => <ItemCard {...args} />

export const Normal = Template.bind({})

const argTypes = {
  color: {
    control: 'color'
  },
  char: {
    control: 'select',
    options: ['Rick', 'Morty', 'Jerry'],
    mapping: {
      Rick: {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      Morty: {
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      Jerry: {
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      }
    },
  }
}

const defaultArgs: Omit<IItemCard> = {
  color: "#506506",
  char: {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

