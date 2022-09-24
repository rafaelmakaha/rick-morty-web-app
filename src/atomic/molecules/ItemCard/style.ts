import styled from 'styled-components'
import { theme } from '../../../tokens'

export const Container = styled.div`
  border: 2px;
  border-radius: 10px;
  background-color: ${(props) => props.color || theme.colors.greenUgly};
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 12px;
  width: 100%;
  &:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    transform: scale(1.05);
    overflow: visible;
  }
`

export const Image = styled.img`
  border: 2px;
  border-radius: 5px;
  object-fit: contain;
`
