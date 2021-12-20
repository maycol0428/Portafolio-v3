import React from "react";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
import Subtitle from "./shared/Subtitle";
import Underline from "./shared/Underline";
import yoIMG from "../static/yo.jpg";
import BorderImageGradient from "./shared/BorderImageGradient";
import { deviceMinWidth, devicePx } from "../utils/style/BreakPoints";
import dragonIMG from "../static/dragon.jpg";
const skills = [
  "React",
  "React Native",
  "Nodejs",
  "Express",
  "Javascript",
  "Html",
  "Css",
  "Firebase",
  "Mongoose",
  "Socketio",
  "Nextjs",
  "Styled Component",
  "Mui",
  "Redux Toolkit",
  "Recoil",
  "Sequelize",
];
const SobreMi = ({ title }) => {
  return (
    <>
      <Container>
        <Subtitle title={title}></Subtitle>
        <ContainerWrapper>
          <div className="info">
            <p>
              ¡Hola! Mi nombre es <Underline color={"#7A7051"}>Maycol</Underline> y disfruto creando aplicaciones webs y
              mobiles. Mi interés en la programacion inicia al ver grandes personajes como{" "}
              <Underline color={"#7A7051"}>Steve Jobs</Underline>.
              <br />
              Para mi escribir y editar codigos para resolver problemas me resulta emocionante ya saben siempre hay algo
              nuevo que aprender.
              <br />
              Mi lenguaje favorito es <Underline color={"#7A7051"}>Javascript</Underline> y sus inmensas posibilidades
              &#128170; &#x1F601;!
            </p>
            <div className="divider"></div>
            <p className="p-segundo">Aquí hay algunas tecnologías con las que he trabajado:</p>
            <div className="divider"></div>
            <ul>
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
            <div className="divider"></div>
          </div>
          <Pic>
            <div className="wrapper">
              <img className="img" src={yoIMG} alt="Headshot" />
              <div className="background-img"></div>
            </div>
          </Pic>
        </ContainerWrapper>
      </Container>
      <Recortes></Recortes>
      <Recortes className="dos"></Recortes>
      <Recortes className="tres"></Recortes>
      <Adornos>{"01."}</Adornos>
      <Adornos className="frase">{"El unico modo de hacer un gran trabajo es amar lo que haces."}</Adornos>
    </>
  );
};

export default SobreMi;

const Pic = styled.div`
  position: relative;
  max-width: 300px;
  .wrapper .background-img {
    border: 3px solid black;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    background: linear-gradient(to right, #080808, transparent, #080808);
    pointer-events: none;
    ::after {
      transition: width 0.2s ease, height 0.5s ease, opacity 0.7s ease;
      content: "";
      z-index: 9;
      position: absolute;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid black;
      background: transparent;
      /* opacity: 0.5; */
    }
    ::before {
      transition: opacity 0.3s ease;
      content: "&";
      color: #5e5e5e;
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      font-family: Luxurious Script;
      font-size: clamp(80px, 8vw, 100px);
      font-weight: 100;
      letter-spacing: 10px;
    }
  }
  .wrapper:hover .background-img {
    background: transparent;
    border: 1px solid black;
  }
  .wrapper:hover .background-img::after,
  .wrapper:focus .background-img::after {
    /* content: "";
    background: transparent;
    border: 0; */
    width: 0%;
    height: 0%;
    opacity: 0;
  }
  .wrapper:hover .background-img::before,
  .wrapper:focus .background-img::before {
    opacity: 0;
  }

  width: 60%;
  @media ${deviceMinWidth.mobileL} {
    width: 100%;
    max-width: calc(300px - 60px);
    margin-right: 100px;
  }
  @media (min-width: 550px) {
    width: 100%;
    max-width: calc(300px - 20px);
    margin-right: 60px;
  }
  @media ${deviceMinWidth.tablet} {
    width: 100%;
    max-width: 300px;
    margin-right: 0px;
  }
  @media ${deviceMinWidth.laptop} {
    width: 100%;
    max-width: 350px;
    margin-right: 0px;
  }
  .wrapper {
    /* mix */
    transition: var(--transition);
    box-shadow: 0 10px 30px -15px black, rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    /* mix */
    display: block;
    position: relative;
    width: 100%;

    /* background-color: #999273; */
    background-color: #c2b991;
    background-color: white;
  }

  .wrapper:hover,
  .wrapper:focus {
    /* mix */
    box-shadow: 0 20px 30px -15px black;
    /* mix */
    background: transparent;
    outline: 0;
  }

  .wrapper:hover:after,
  .wrapper:focus:after {
    top: 15px;
    left: 15px;
    @media ${deviceMinWidth.tablet} {
      top: 20px;
      left: 20px;
    }
    @media ${deviceMinWidth.laptop} {
      top: 35px;
      left: 35px;
    }
    @media ${deviceMinWidth.laptopL} {
      top: 45px;
      left: 45px;
    }
  }

  .wrapper::after,
  .wrapper::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;

    transition: var(--transition);
  }

  .wrapper::before {
    top: 0;
    left: 0;
    background-color: #080808;
    mix-blend-mode: screen;
  }

  .wrapper::after {
    border: 2px solid #999273;
    background: linear-gradient(to right, #080808, #0a0a0a, #080808);
    top: 20px;
    left: 20px;
    z-index: -1;
    background: url(${dragonIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    @media ${deviceMinWidth.tablet} {
      top: 30px;
      left: 30px;
    }
    @media ${deviceMinWidth.laptop} {
      top: 50px;
      left: 50px;
    }
    @media ${deviceMinWidth.laptopL} {
      top: 60px;
      left: 60px;
    }
  }

  .wrapper:hover .img,
  .wrapper:focus .img {
    filter: none;
    mix-blend-mode: normal;
  }

  .img {
    object-fit: cover;
    object-position: top right;
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(0%) contrast(1) brightness(30%);
    transition: var(--transition);
    position: relative;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
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
  @media ${deviceMinWidth.mobileL} {
    align-items: center;
  }
  @media ${deviceMinWidth.tablet} {
    flex-direction: row;
    justify-content: space-around;
    justify-content: space-evenly;
    align-items: center;
  }

  > .info {
    max-width: 300px;
    color: #050505;

    @media ${deviceMinWidth.mobileM} {
      max-width: 340px;
    }
    @media ${deviceMinWidth.tablet} {
      max-width: 400px;
    }
    @media ${deviceMinWidth.laptop} {
      max-width: 500px;
    }
    > div.divider {
      width: 100%;
      border-bottom: 1px dashed #5a0601;
      margin-bottom: 10px;
      margin-top: 10px;
      letter-spacing: 4px;
    }
    > p {
      background: linear-gradient(to right, #080808, #0a0a0a, #080808);
      color: #7a7a7a;
      border: 1px solid black;
      padding: clamp(20px, 4vw, 40px);
      font-family: "Roboto";
      font-size: clamp(15px, 4vw, 17px);
      font-weight: 600;
      line-height: 1.6;
      position: relative;
      ::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -21px;
        width: 20px;
        height: 20px;
        background-color: #2b2200;
      }
      &.p-segundo {
        background: linear-gradient(to right, #5a0601, #660601, #5a0601);
        color: #a8a8a8;
      }
      &.p-segundo::before {
        content: "";
        position: absolute;
        top: auto;
        bottom: -1px;
        right: -11px;
        width: 10px;
        height: 10px;
        background-color: #a8a8a8;
      }
    }
    > ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(80px, 1fr));
      overflow: hidden;
      list-style: none;
      width: fit-content;
      margin: 0;
      width: 100%;
      background: #080808;
      color: #a3956c;
      color: #7a7a7a;
      padding: clamp(20px, 4vw, 40px);
      > li {
        position: relative;
        padding-left: 20px;
        white-space: nowrap;
        font-family: "Roboto";
        font-size: clamp(15px, 4vw, 17px);
        font-weight: 600;
        margin-bottom: 3px;
        &:before {
          content: "▹";
          left: 0;
          top: 0;
          display: flex;
          position: absolute;
          color: #d6c48d;
        }
      }
    }
  }
  > .image {
    margin-top: 20px;
    display: flex;
    padding: 10px;
    background: black;
    gap: 10px;
    height: 100%;
    img {
      max-width: 200px;
      display: block;
      object-position: center;
      object-fit: cover;
      filter: brightness(70%);
      border-radius: 3px;
    }
    > .image-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      span {
        background: #0d0d0d;
        border: 1px solid #0a0a0a;
        color: #999999;
        padding: 10px;
        font-family: "Lato";
        font-weight: 600;
        font-size: clamp(11px, 3vw, 15px);
      }
    }
  }
`;

const Adornos = styled.span`
  position: absolute;
  bottom: 0;
  right: 20px;
  display: flex;
  flex-direction: column;
  font-family: Bebas Neue;
  font-size: 80px;
  font-weight: 900;
  color: #2b2200;
  opacity: 0.3;
  ::before {
    content: "";
    position: relative;
    top: 20px;
    width: 100%;
    height: 10px;
    background-color: #2b2200;
  }
  &.frase {
    color: #5a0601;
    top: 15px;
    right: 0;
    max-width: 80px;
    font-size: 10px;
    opacity: 0.5;
    ::before {
      content: "";
      position: relative;
      width: 100%;
      height: 5px;
      background-color: #5a0601;
      top: 0;
    }
    @media ${deviceMinWidth.mobileL} {
      max-width: 100px;
      right: 10px;
      font-size: 12px;
    }
    @media ${deviceMinWidth.tablet} {
      top: 60px;
      max-width: 120px;
      right: 20px;
    }
    @media ${deviceMinWidth.laptop} {
      right: calc(50px + 1vw);
      font-size: 14px;
      max-width: 120px;
    }
    @media ${deviceMinWidth.laptopL} {
      right: calc(100px + 10vw);
      font-size: 14px;
      max-width: 120px;
    }
  }
`;
const Recortes = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 10px;
  background-color: #080808;
  &.dos {
    background-color: #2b2200;
    width: 5px;
    height: 5px;
    left: 20px;
    top: 20%;
  }
  &.tres {
    width: 15px;
    height: 15px;
    left: 20px;
    top: 50%;
    background-color: #2b2200;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: ${devicePx.laptopL};
  z-index: 99;
`;
