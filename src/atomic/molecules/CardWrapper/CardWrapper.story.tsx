import React from 'react'
import { Meta, Story } from '@storybook/react'
import CardWrapper, { ICardWrapper } from '.'

export default {
  title: 'Molecules/CardWrapper'
} as Meta

const Template: Story<ICardWrapper> = (args) => <CardWrapper {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  }
}

const defaultArgs: Omit<ICardWrapper> = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes
