import React from 'react'
import { Meta, Story } from '@storybook/react'
import ItemDescription, { IItemDescription } from '.'

export default {
  title: 'Atoms/ItemDescription'
} as Meta

const Template: Story<IItemDescription> = (args) => <ItemDescription {...args} />

export const Normal = Template.bind({})

const argTypes = {
    children: {
        control: 'text'
    }
}

const defaultArgs: Omit<IItemDescription> = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

