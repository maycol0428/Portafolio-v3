import styled from "styled-components";
import { color } from "./Colors";
export const Button = styled.a`
  color: ${color.PuertoRico};
`;
export const TitleSection = styled.h1`
  background-color: ${color.Bunker};
  font-family: "Lato";
  font-weight: 900;
  font-size: clamp(50px, 8vw, 80px);
  color: ${color.MoonRaker};
  padding: 20px 0px;
  -webkit-box-shadow: 0px -12px 40px 7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px -12px 40px 7px rgba(0, 0, 0, 1);
  box-shadow: 0px -12px 40px 7px rgba(0, 0, 0, 1), 0px 22px 40px 7px rgba(0, 0, 0, 1);
`;
