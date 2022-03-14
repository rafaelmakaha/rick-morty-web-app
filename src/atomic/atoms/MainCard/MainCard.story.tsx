import React from 'react'
import { Meta, Story } from '@storybook/react'
import MainCard, { IMainCard } from '.'

export default {
  title: 'Atoms/MainCard'
} as Meta

const Template: Story<IMainCard> = (args) => <MainCard {...args} />

export const Normal = Template.bind({})

const argTypes = {
  color: {
    control: 'color'
  }
}

const defaultArgs: IMainCard = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
