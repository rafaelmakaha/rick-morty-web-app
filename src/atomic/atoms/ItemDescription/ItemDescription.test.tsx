import { cleanup, render } from '@testing-library/react'
import React from 'react'
import ItemDescription, { IItemDescription } from '.'
import { mockTestID } from '../../../utils'

describe('Atoms/ItemDescription', () => {
  const props: IItemDescription = {
    testID: 'ItemDescription',
    children: 'SomeChildren'
  }

  const renderComponent = () => render(<ItemDescription {...props} />)

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
