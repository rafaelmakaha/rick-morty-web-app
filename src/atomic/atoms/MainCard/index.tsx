import React from "react";
import { Background } from "./style";

interface IMainCard {
  color?: String;
  children?: React.ReactNode;
}

const MainCard: React.FC<IMainCard> = ({ color, children }) => (
  <Background color={color}>{children}</Background>
);

export default MainCard;
