import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { deviceMinWidth } from "../../utils/style/BreakPoints";
import { color } from "../../utils/style/Colors";

const BorderImageGradient = ({ img, width = 90, height = 90 }) => {
  return (
    <Styled>
      <AvatarStyled src={img}></AvatarStyled>
    </Styled>
  );
};

export default BorderImageGradient;
const AvatarStyled = styled(Avatar)`
  && {
    width: 150px;
    height: 150px;
    @media ${deviceMinWidth.laptop} {
      width: 250px;
      height: 250px;
    }
  }
`;
const Styled = styled.div`
  position: relative;
  :after {
    display: block;
    border-radius: 50%;
    content: "";
    width: 108%;
    height: 108%;
    position: absolute;

    left: -4%;
    top: -4%;
    background-image: conic-gradient(
      ${color.red_7},
      black,
      ${color.red_20},
      black,
      ${color.red_9},
      black,
      ${color.red_7}
    );
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  img {
    cursor: pointer;
    border-radius: 50%;
    z-index: 1;
    object-fit: cover;
    object-position: top;
    background: black;
    border: 3px solid ${color.Bunker};
  }
`;
