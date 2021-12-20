import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import { FilePdf } from "@styled-icons/boxicons-solid";
import { Button } from "../utils/style/GlobalStyled";
import { color } from "../utils/style/Colors";
import { size } from "../utils/style/FontSize";
import { device, deviceMinWidth, devicePx } from "../utils/style/BreakPoints";
import AnimationCode from "../animations/code.json";
import PDFcv from "../files/cv.pdf";
import UnderLine from "./shared/Underline";
const Welcome = () => {
  const [hoverButtonPFG, setHoverButtonPFG] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 10) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
  }, []);
  return (
    <>
      <WelcomeStyled>
        <Title className="title">
          <h1>Maycol Christian EM.</h1>
          <div className={`logofondo ${!scrollDown || "scrolldown"}`}>
            <a href="#">M</a>
          </div>
        </Title>
        <Title className="subtitle">
          <h1>Ingeniero de Sistemas.</h1>
        </Title>
        <Title className="tercero">
          <p>
            Soy un ingeniero de sistemas residente en <UnderLine>lima(Peru)</UnderLine> que se especializa en crear y
            algunas veces diseñar aplicaciones <UnderLine>webs</UnderLine> y <UnderLine>mobiles</UnderLine>.
          </p>
        </Title>

        <ButtonStyled>
          <button
            onClick={() => {
              window.open(PDFcv);
            }}
          >
            CV
          </button>
        </ButtonStyled>
      </WelcomeStyled>
      <Luck>
        <svg width="400" height="120">
          <text
            fill="black"
            fillOpacity="0"
            fontFamily="Roboto"
            fontWeight="900"
            fontSize="80"
            x="200"
            y="100"
            textAnchor="middle"
            stroke="#595959"
          >
            L U C K
          </text>
        </svg>
      </Luck>
    </>
  );
};

export default Welcome;
const WelcomeStyled = styled.div`
  width: 100%;
  max-width: ${devicePx.laptop};
  /* position: relative;
  z-index: 999; */
`;
const WelcomeSubtitle = styled.div`
  h2 {
    background-color: black;
    color: white;
    mix-blend-mode: multiply;
    font-size: 50px;
  }
`;
const Luck = styled.div`
  filter: blur(1px);
  position: absolute;
  bottom: 0;
  opacity: 1;
  /* transform: rotate(180deg); */
`;
const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: relative;
    border: 1px solid #6b6139;
    color: #424242;
    padding: 20px 40px;
    font-weight: 600;
    background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    filter: brightness(90%);
    :hover {
      filter: brightness(160%);
    }
  }
  ::after,
  ::before {
    content: "→";
    margin-left: -10px;
    margin-top: -5px;
    font-size: 40px;
    color: #8a7d49;
  }
  ::before {
    margin-right: -10px;
    content: "←";
  }
`;
const Title = styled.div`
  display: flex;
  position: relative;
  h1 {
    width: fit-content;
    background: linear-gradient(to left, #080808, #0d0d0d, #080808);
    padding: 20px;
    /* backdrop-filter: blur(10px); */
    white-space: nowrap;
    color: #757575;
    font-weight: 900;
    font-family: "Lato";
    font-size: clamp(20px, 7vw, 80px);
  }
  &.title {
    ::after {
      content: "";
      width: 10px;
      height: 10px;
      position: relative;
      bottom: 10px;
      background: #8a7d49;
    }
  }
  &.subtitle {
    justify-content: flex-end;
    align-items: flex-end;
    h1 {
      color: #5c5c5c;
      backdrop-filter: blur(5px) grayscale(0%);
      background: linear-gradient(to left, black, rgba(0, 0, 0, 0.8), black);
      /* mix-blend-mode: multiply; */
      filter: brightness(50%);
    }
    ::before {
      content: "";
      width: 10px;
      height: 10px;
      position: relative;
      bottom: -10px;
      background: #757575;
    }
  }
  &.tercero {
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 30px;
    span {
      font-family: "Lato";
    }
    p {
      background: linear-gradient(to left, #080808, #0d0d0d, #080808);
      backdrop-filter: blur(5px) grayscale(100%);
      padding: 20px;
      color: #757575;
      max-width: 200px;
      font-family: "Lato";
      font-size: clamp(15px, 4vw, 17px);
      font-weight: 600;
      position: relative;
      line-height: 1.6;
      @media ${deviceMinWidth.mobileL} {
        max-width: 300px;
      }
      @media ${deviceMinWidth.tablet} {
        max-width: 400px;
      }
      ::before {
        content: "";
        position: absolute;
        right: 0;
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: -10px;
        background: #757575;
      }
    }
    ::before {
      content: "do you like me?";
      left: 0;
      position: relative;
      color: #595959;
      transform: rotate(180deg);
    }
  }
  > .logofondo {
    color: #757575;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 9;
    @media ${deviceMinWidth.laptop} {
      top: -90%;
    }
    @media ${deviceMinWidth.laptopL} {
      top: -85%;
    }
    a {
      font-size: clamp(70px, 11vw, 100px);
      font-weight: 100;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    ::after,
    ::before {
      content: "";
      position: absolute;
      z-index: 9;
      width: 180%;
      height: 40%;
      left: -40%;
      bottom: 0;
      border-left: 1px solid #757575;
      border-bottom: 1px solid #757575;
      border-right: 1px solid #757575;
    }
    ::before {
      z-index: 9;
      top: 0;
      border-left: 1px solid #757575;
      border-top: 1px solid #757575;
      border-right: 1px solid #757575;
      border-bottom: 0;
    }
    &.scrolldown {
      > a {
        font-size: 10px;
      }
      opacity: 0;
      visibility: hidden;
    }
  }
`;
