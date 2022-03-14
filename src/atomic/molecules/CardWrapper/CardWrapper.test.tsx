import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { mockTestID } from '../../../utils'
import CardWrapper, { ICardWrapper } from '.'

describe('Atoms/CardWrapper', () => {
  const props: ICardWrapper = {
    testID: 'CardWrapper',
    children: 'SomeChildren'
  }

  const renderComponent = () => render(<CardWrapper {...props} />)

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
