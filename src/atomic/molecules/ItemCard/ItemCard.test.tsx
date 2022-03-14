import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { mockTestID } from '../../../utils'
import ItemCard, { IItemCard } from '.'

describe('Atoms/ItemCard', () => {
  const props: IItemCard = {
    testID: 'ItemCard',
    char: {
      id: 0,
      name: 'Character 0',
      status: 'Some Status',
      species: 'Some Species',
      type: 'Some type',
      gender: 'Some gender',
      image: 'Some url'
    }
  }

  const renderComponent = () => render(<ItemCard {...props} />)

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const elContainer = mockTestID('div', props.testID!)

  it(`should render component #${elContainer}`, () => {
    const sut = component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})
