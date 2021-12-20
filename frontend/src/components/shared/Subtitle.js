import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { deviceMinWidth } from "../../utils/style/BreakPoints";
import { color } from "../../utils/style/Colors";
import { size } from "../../utils/style/FontSize";
const Subtitle = ({ title, color }) => {
  return (
    <SubtitleStyled color={color}>
      <span className="subtitle-left">{title}</span>
    </SubtitleStyled>
  );
};

export default Subtitle;
const SubtitleStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > span.subtitle-left {
    font-family: Bebas Neue;
    font-size: clamp(55px, 11vw, ${size.heading100});
    color: ${(props) => (props.color ? props.color : "#030303")};
    font-weight: 900;
    white-space: nowrap;
    margin-left: 19px;
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0px;
      background-color: ${(props) => (props.color ? props.color : "#030303")};
      transform: translateX(-100%);
    }
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0px;
    background-color: ${(props) => (props.color ? props.color : "#030303")};
  }
  ::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 10px;
    right: 0;
    bottom: 0px;
    background-color: ${(props) => (props.color ? props.color : "#030303")};
  }
`;
