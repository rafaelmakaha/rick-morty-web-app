import React from "react";
import { Background } from "./style";

export interface IMainCard {
  testID?: string
  color?: string
  children?: React.ReactNode
}

const MainCard: React.FC<IMainCard> = ({ testID = 'MainCard', color, children }) => (
  <Background color={color}>{children}</Background>
);

export default MainCard;
