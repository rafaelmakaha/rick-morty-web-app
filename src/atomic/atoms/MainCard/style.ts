import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color || "#aaa"};
  left: 5%;
  height: 100vh;
  position: absolute;
  width: 90vw;
`
