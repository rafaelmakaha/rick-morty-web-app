import styled from 'styled-components'

export const Container = styled.div`
    border: 2px;
    border-radius: 10px;
    background-color: ${(props) => props.color || "#506506"};
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 4px;
    width: auto;
`

export const Image = styled.img`
    border: 2px;
    border-radius: 5px;
    object-fit: fill;
`