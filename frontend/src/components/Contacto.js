import React from "react";
import styled from "styled-components";
import { Facebook, Github, InstagramAlt } from "@styled-icons/boxicons-logos";
import { Gmail } from "@styled-icons/simple-icons";
import { deviceMinWidth } from "../utils/style/BreakPoints";
import { size } from "../utils/style/FontSize";
const Contacto = ({ title }) => {
  return (
    <>
      <Frase>Tu sueño nunca se desvanecerá si no le dejas marchar.</Frase>
      <SubtitleContacto>
        <span className="subtitle-left">{title}</span>
      </SubtitleContacto>
      <Container>
        <div className="container-redes">
          <div
            className="red-social"
            onClick={() => {
              window.open("mailto:maycol0428@gmail.com");
            }}
          >
            <Gmail></Gmail>
            <div className="red-social-div">
              <span className="">gmail</span>
            </div>
            <span className="res-social-detail">maycol0428</span>
          </div>

          <div
            className="red-social"
            onClick={() => {
              window.open("https://www.facebook.com/maycolchristian.em");
            }}
          >
            <Facebook></Facebook>
            <div className="red-social-div right">
              <span>facebook</span>
            </div>
            <span className="res-social-detail">maycolchristian.em</span>
          </div>

          <div
            className="red-social"
            onClick={() => {
              window.open("https://github.com/maycol0428");
            }}
          >
            <Github></Github>
            <div className="red-social-div">
              <span className="">github</span>
            </div>
            <span className="res-social-detail">maycol0428</span>
          </div>

          <div
            className="red-social"
            onClick={() => {
              window.open("https://www.instagram.com/maycol0428/");
            }}
          >
            <InstagramAlt></InstagramAlt>
            <div className="red-social-div right">
              <span>instagram</span>
            </div>
            <span className="res-social-detail">maycol0428</span>
          </div>
        </div>
        <ButtonStyled>
          <span className="flex-1">←</span>
          <button
            onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=51950341940");
            }}
          >
            ¿Quieres enviarme un mensaje?
          </button>
          <span>→</span>
        </ButtonStyled>
      </Container>
      <Luck>
        <svg width="400" height="120">
          <text
            fill="black"
            fillOpacity="0"
            fontFamily="Roboto"
            fontWeight="900"
            fontSize="70"
            x="200"
            y="100"
            textAnchor="middle"
            stroke="#757575"
          >
            {"M A N Ä"}
          </text>
        </svg>
      </Luck>
      <Luck className="luck2">
        <svg width="1000" height="150">
          <text
            fill="black"
            fillOpacity="0"
            fontFamily="Roboto"
            fontWeight="900"
            fontSize="150"
            x="500"
            y="130"
            textAnchor="middle"
            stroke="#757575"
          >
            F I R E F L I E S
          </text>
        </svg>
      </Luck>
      <Luck className="luck3">
        <svg width="1000" height="150">
          <text
            fill="black"
            fillOpacity="0"
            fontFamily="Roboto"
            fontWeight="900"
            fontSize="150"
            x="500"
            y="130"
            textAnchor="middle"
            stroke="#757575"
          >
            H I S T O R Y
          </text>
        </svg>
      </Luck>
      <Adorno className="topleft"></Adorno>
      <Adorno className="topright"></Adorno>
    </>
  );
};

export default Contacto;
const Adorno = styled.div`
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-left: 1px solid #757575;
  border-top: 1px solid #757575;
  &.topright {
    left: auto;
    right: 20px;
    border-right: 1px solid #757575;
    border-left: none;
  }
`;
const SubtitleContacto = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > span.subtitle-left {
    width: fit-content;
    text-align: center;
    font-family: Bebas Neue;
    font-size: clamp(55px, 11vw, ${size.heading100});
    font-weight: 900;
    white-space: nowrap;
    position: relative;
    background: -webkit-linear-gradient(45deg, #757575, #757575, #757575);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::after,
    ::before {
      content: "";
      position: absolute;
      top: 0;
      height: 40%;
      width: 120%;
      left: -10%;
      border: 1px solid #757575;
      border-bottom: none;
    }
    :before {
      top: auto;
      bottom: 0;
      border: 1px solid #757575;
      border-top: none;
    }
  }
`;
const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  button {
    position: relative;
    border: 1px solid #6b6139;
    color: #424242;
    padding: 10px 20px;
    font-weight: 600;
    background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    filter: brightness(90%);
    :hover {
      filter: brightness(160%);
    }
  }
  span {
    position: relative;
    color: #8a7d49;
    font-size: 40px;
    right: 10px;
    top: -3px;
  }
  span.flex-1 {
    right: auto;
    left: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
  ::after {
    content: "";
    position: absolute;
    width: 50%;
    top: 50%;
    right: 0;
    z-index: -1;
    border: 10px solid #2b2200;
    opacity: 0.1;
  }
  ::before {
    content: "";
    position: absolute;
    height: 50%;
    bottom: 0;
    left: 0;
    z-index: -1;
    border: 10px solid #2b2200;
    opacity: 0.1;
  }

  .container-redes {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 80px 80px;
    grid-template-rows: 80px 80px;
    overflow: scroll;
    position: relative;

    svg {
      height: 25px;
    }
    @media ${deviceMinWidth.mobileL} {
      grid-template-columns: calc(100px + 4vw) calc(100px + 4vw);
      grid-template-rows: calc(100px + 4vw) calc(100px + 4vw);
      .red-social {
        svg {
          height: 30px;
          position: relative;
        }
      }
    }
    @media ${deviceMinWidth.tablet} {
      grid-template-columns: calc(120px + 4vw) calc(120px + 4vw);
      grid-template-rows: calc(120px + 4vw) calc(120px + 4vw);
      .red-social {
        svg {
          height: 35px;
        }
      }
    }
    .red-social {
      cursor: pointer;
      background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
      border: 1px solid #6b6139;
      font-weight: 600;
      color: #424242;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      ::after {
        content: "";
        position: absolute;
        width: 50%;
        top: 0%;
        right: 0;
        z-index: -1;
        border: 10px solid #2b2200;
        opacity: 0.1;
      }
      ::before {
        content: "";
        position: absolute;
        height: 20%;
        bottom: 0;
        left: 0;
        z-index: -1;
        border: 10px solid #2b2200;
        opacity: 0.1;
      }
      filter: brightness(90%);
      :hover {
        filter: brightness(160%);
      }
      .res-social-detail {
        font-size: clamp(7px, 2vw, 13px);
      }

      .red-social-div {
        position: absolute;
        width: 80px;
        font-size: clamp(10px, 3vw, 15px);
        text-align: center;
        right: calc(100% + 2px);
        bottom: -1px;
        height: 50%;
        border-top: 1px solid #4a0401;
        border-bottom: 1px solid #4a0401;
        border-left: 1px solid #4a0401;
        color: #8c8c8c;
        background: linear-gradient(to left, #330301, #380301, #330301);
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${deviceMinWidth.mobileL} {
          width: calc(90px);
          font-size: 16px;
        }
      }
      div.red-social-div.right {
        right: auto;
        border-left: none;
        left: calc(100% + 2px);
        border-right: 1px solid #4a0401;
      }
    }
  }
`;

const Luck = styled.div`
  filter: blur(1px);
  position: absolute;
  bottom: 0;
  opacity: 0.4;
  z-index: 1;
  pointer-events: none;
  /* transform: rotate(180deg); */
  &.luck2 {
    bottom: 0;
    top: 25%;
    left: 5%;
  }
  &.luck3 {
    right: 0;
    bottom: 0;
    top: 50%;
  }
`;
const Frase = styled.p`
  text-align: center;
  font-family: Imperial Script;
  font-family: Luxurious Script;
  margin-top: 30px;
  word-spacing: 6px;
  margin-bottom: 30px;
  color: #ed1602;
  color: #787878;
  font-weight: 400;
  letter-spacing: 2px;
  opacity: 0.3;
  margin-left: 30px;
  margin-right: 30px;
  white-space: pre-wrap;
  /* opacity: 1;
  filter: brightness(100%); */
  font-size: clamp(25px, 6vw, 30px);
`;
