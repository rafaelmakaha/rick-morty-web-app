import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey };
  left: 5%;
  min-height: 100vh;
  position: absolute;
  width: 90vw;
`
