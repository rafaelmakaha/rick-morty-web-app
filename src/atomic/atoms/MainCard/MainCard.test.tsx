import { cleanup, render } from "@testing-library/react";
import React from "react";
import MainCard, { IMainCard } from ".";
import { mockTestID } from "../../../utils";

describe('Atoms/MainCard', () => {
    const props: IMainCard = {
        testID: 'MainCard',
        color: 'red',
        children: 'Some Children'
    }

    const renderComponent = () => render(<MainCard {...props} />)

    let component = renderComponent()

    beforeEach(() => {
        jest.clearAllMocks()
        cleanup()
        component = renderComponent()
    })

    const el_container = mockTestID('div', props.testID!)

    it(`should render component #${el_container}`, () => {
        const sut = component.findByTestId(el_container)
        expect(sut).toBeTruthy()
    })

    it('should render snapshot', () => {
        expect(component.container.firstChild).toMatchSnapshot()
    })

})
