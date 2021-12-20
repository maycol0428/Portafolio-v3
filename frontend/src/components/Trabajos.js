import React, { useEffect, useState } from "react";
import Subtitle from "./shared/Subtitle";
import axios from "axios";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
import TrabajoCard from "./TrabajoCard";
import TrabajosDestacados from "./TrabajosDestacados";
import intagramIMG from "../static/Instagram-v2-clone.png";
import SpotifyIMG from "../static/Spotify-clone.jpg";
import uberEats1IMG from "../static/Uber-eats-clone.jpg";
import amazonv1IMG from "../static/amazon-v1-clone.png";
import { device, deviceMinWidth, devicePx } from "../utils/style/BreakPoints";
const destacadosArray = [
  { name: "amazon-v1-clone", image: [{ url: amazonv1IMG }] },
  { name: "Instagram-v2-clone", image: [{ url: intagramIMG }] },
  { name: "Uber-eats-clone", image: [{ url: uberEats1IMG }] },
  { name: "Spotify-clone", image: [{ url: SpotifyIMG }] },
];
const Trabajos = ({ title }) => {
  const [repositories, setRepositories] = useState([]);
  const [destacadaos, setDestacadaos] = useState([]);
  const [offsetPaginate, setOffsetPaginate] = useState(3);
  useEffect(() => {
    axios.get("https://api.github.com/users/maycol0428/repos").then(({ data }) => {
      setRepositories(data);
    });
  }, []);
  useEffect(() => {
    if (repositories.length > 0) {
      let _destacados = repositories.filter((repo) => {
        // eslint-disable-next-line
        let des = destacadosArray.filter((des) => {
          if (des.name === repo.name) {
            repo.image = des.image;
            return true;
          }
        });
        if (des.length > 0) {
          return [repo, ...des];
        }
      });
      setDestacadaos(_destacados);
    }
  }, [repositories]);

  return (
    <>
      <Firma>
        <div>Meet your Maker</div>
      </Firma>
      <Container>
        <Subtitle title={title} color={"#828282"}></Subtitle>
        <ContainerWrapper>
          <Destacados>
            {destacadaos.map((des, index) => {
              let reverse = "";
              if (index % 2 === 0) {
                reverse = "reverse";
              }
              return (
                <DestacadoCard key={index} className={`destacado-card ${reverse}`} des_id={des.id}>
                  <div className="destacado-card-info">
                    <h3>{des.name.replaceAll("-", " ")}</h3>
                    <p>{des.description}</p>
                    <div className="topics">
                      {des.topics.map((topic, index) => {
                        return <span key={index}>{`${topic.replaceAll("-", " ")}`}</span>;
                      })}
                    </div>
                    <div className="trabajo-buttons">
                      <button
                        onClick={(e) => {
                          window.open(des.svn_url);
                        }}
                      >
                        Github
                      </button>
                      <button
                        onClick={(e) => {
                          if (des.homepage) {
                            window.open(des.homepage);
                          }
                        }}
                      >
                        Web
                      </button>
                    </div>
                  </div>
                  <Pic className="pic" name={des.name.replaceAll("-", " ")}>
                    <div className="wrapper">
                      <img className="img" src={des.image[0].url} alt="Headshot" />
                      <div className="background-img"></div>
                      <div className="img-info-work">
                        <button
                          onClick={(e) => {
                            window.open(des.svn_url);
                          }}
                        >
                          Github
                        </button>
                        <span>{des.name.replaceAll("-", " ")}</span>
                        <button
                          onClick={(e) => {
                            if (des.homepage) {
                              window.open(des.homepage);
                            }
                          }}
                        >
                          Web
                        </button>
                      </div>
                    </div>
                  </Pic>
                </DestacadoCard>
              );
            })}
          </Destacados>
        </ContainerWrapper>
        <TrabajosNormales id="trabajosnormalesid">
          {repositories
            .filter((repo) => repo.id !== 435586251)
            .map((res, index) => {
              return (
                <div className="trabajo-normal" key={index}>
                  <div className="trabajo-title">{res.name.replaceAll("-", " ")}</div>
                  <div className="trabajo-body">{res.description}</div>
                  <div className="trabajo-topics">
                    {res.topics.map((topic, index) => {
                      return <span key={index}>{`${topic.replaceAll("-", " ")}`}</span>;
                    })}
                  </div>
                  <div className="trabajo-buttons">
                    <button
                      onClick={(e) => {
                        window.open(res.svn_url);
                      }}
                    >
                      Github
                    </button>
                    <button
                      onClick={(e) => {
                        if (res.homepage) {
                          window.open(res.homepage);
                        }
                      }}
                    >
                      Web
                    </button>
                  </div>
                  <span className={`decoration-button`}></span>
                  <span className="decoration-id">{res.id}</span>
                </div>
              );
            })
            .slice(0, offsetPaginate)}
        </TrabajosNormales>
        <ButtonPaginateDefault id="buttonasdsd">
          <button
            className={repositories.length - 1 <= offsetPaginate ? "nohaymas" : ""}
            onClick={(e) => {
              setOffsetPaginate((offset) => {
                if (repositories.length - 1 > offsetPaginate) {
                  return offset + 3;
                } else {
                  // const defaultwrapper = document.getElementById("trabajosnormalesid");
                  // // e.target.scrollIntoView({ block: "start" });
                  // defaultwrapper.scrollIntoView({ block: "center" });
                  return 3;
                }
              });
            }}
          >
            {repositories.length - 1 > offsetPaginate ? "ver mas" : "ver menos"}
          </button>
        </ButtonPaginateDefault>
      </Container>
      <Recortes></Recortes>
      <Recortes className="dos"></Recortes>
      <Recortes className="tres"></Recortes>
      <Adornos>{"02."}</Adornos>
      <Adornos className="frase">{"El pasado es tan solo una historia que nos contamos."}</Adornos>
    </>
  );
};

export default Trabajos;
const ButtonPaginateDefault = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: clamp(40px, 10vw, 80px);
  button {
    border: 1px solid #6b6139;
    color: #424242;
    padding: clamp(15px, 3vw, 30px) clamp(25px, 3vw, 40px);
    font-weight: 600;
    background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
    transition: all 0.2s ease;
    &.nohaymas {
      background: transparent;
      color: #6b6139;
    }
    :hover {
      filter: brightness(50%);
    }
  }
`;
const TrabajosNormales = styled.div`
  margin-left: 21px;
  margin-right: 20px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  @media ${deviceMinWidth.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  .trabajo-normal {
    position: relative;
    background: linear-gradient(to right, #080808, #0a0a0a, #080808);
    padding: 30px;
    display: flex;
    flex-direction: column;
    ::after,
    ::before {
      content: "";
      position: absolute;
      background-color: #6b6139;
      width: 10px;
      height: 10px;
      bottom: 0;
      left: 0;
    }
    ::before {
      left: auto;
      right: 0;
    }
    .decoration-button {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 90%;
      width: 90%;
      transform: translate(-50%, -50%);
      border: 1px solid #8a7d49;
      pointer-events: none;
      opacity: 0.2;
    }
    .decoration-id {
      position: absolute;
      color: #4b4737;
      font-weight: 400;
      font-family: Bebas Neue;
      top: 0;
      letter-spacing: 3px;
      right: calc(5% - 3px);
      /* transform: rotate(180deg); */
      filter: brightness(70%);
    }
    .trabajo-title {
      color: #6e6e6e;
      font-weight: 500;
      font-family: Bebas Neue;
      font-size: clamp(15px, 5vw, 25px);
      position: relative;
      margin-bottom: 10px;
    }
    .trabajo-body {
      color: #7a7a7a;
      margin-bottom: 10px;
      flex: 1;
    }
    .trabajo-topics {
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      span {
        color: #8f814c;
        font-size: clamp(11px, 3vw, 13px);
      }
    }
    .trabajo-buttons {
      display: flex;
      justify-content: center;
      button {
        flex: 1;
        border: 1px solid #6b6139;
        color: #424242;
        padding: 5px 10px;
        font-weight: 600;
        background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
        transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        :hover {
          filter: brightness(50%);
          transform: translateY(3px);
        }
        :nth-child(1) {
          background: linear-gradient(to left, black, #080808, black);
          color: #7a7a7a;
        }
      }
    }
  }
`;

const Pic = styled.div`
  position: relative;
  /* width: fit-content; */
  .wrapper .img-info-work {
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    * {
      border: 1px solid #6b6139;
      color: #424242;
      padding: 5px 10px;
      font-weight: 600;
      font-size: clamp(13px, 2vw, 20px);
      white-space: nowrap;
      background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
      opacity: 1;
      transition: var(--transition);
      z-index: 10;
      text-align: center;
    }
    span {
      background: linear-gradient(to left, black, #080808, black);
      color: #7a7a7a;
    }
    button:hover {
      transform: translateY(-3px);
      filter: brightness(50%);
    }
  }
  @media ${deviceMinWidth.tablet} {
    .wrapper .img-info-work {
      display: none;
    }
  }
  .wrapper .background-img {
    border: 3px solid black;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    background: linear-gradient(to right, #080808, transparent, #080808);
    pointer-events: none;
    transition: var(--transition);
    /* ::before {
      ${(props) => (props.name ? `content: "${props.name}";` : "")}
      position: absolute;
      bottom: 0;
      left: 50%;
      border: 1px solid #6b6139;
      color: #424242;
      padding: 5px 10px;
      font-weight: 600;
      font-size: clamp(13px, 2vw, 20px);
      white-space: nowrap;
      transform: translateX(-50%);
      background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
      opacity: 1;
      transition: var(--transition);
      z-index: 10;
    } */

    ::after {
      transition: width 0.2s ease, height 0.5s ease, opacity 0.7s ease;
      content: "";
      z-index: 9;
      position: absolute;
      width: 90%;
      height: 90%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px dashed #6b6139;
      background: transparent;
    }
  }
  .wrapper:hover .background-img::before,
  .wrapper:focus .background-img::before {
    /* content: "";
    background: transparent;
    border: 0; */
    opacity: 1;
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

    background-color: #260200;
    background-color: #570501;
    background-color: #5a0601;
    background-color: #393939;
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
    top: 7px;
    left: 7px;
    background: transparent;
    background: linear-gradient(to right, #080808, #141414, #080808);
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
    top: 0px;
    left: 0px;
    background-color: #080808;
    mix-blend-mode: screen;
  }

  .wrapper::after {
    opacity: 0.3;
    border: 1px solid #e2d8aa;
    background: transparent;
    top: 15px;
    left: 15px;
    z-index: -1;
  }

  .wrapper:hover .img,
  .wrapper:focus .img {
    filter: none;
    mix-blend-mode: normal;
  }

  .img {
    object-fit: contain;
    object-position: top right;
    object-position: center;
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }
`;
const DestacadoCard = styled.div`
  .destacado-card-info {
    ::before {
      ${(props) => (props.des_id ? `content: "${props.des_id}";` : "")}
    }
  }
`;
const Destacados = styled.div`
  width: 100%;
  max-width: 1024px;
  > .destacado-card {
    margin-left: 21px;
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    .pic {
      max-width: 600px;
    }
  }
  img {
    max-height: 350px;
  }
  .destacado-card-info {
    display: none;
  }
  @media ${deviceMinWidth.tablet} {
    > .destacado-card {
      justify-content: flex-end;
      position: relative;

      .destacado-card-info {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 0;
        background: linear-gradient(to left, #0d0d0d, #141414, #0d0d0d);
        z-index: 10;
        padding: 30px;
        transform: translateY(-50%);
        h3 {
          color: #6e6e6e;
          font-weight: 600;
          font-family: Bebas Neue;
          font-size: clamp(20px, 5vw, 40px);
          position: relative;
          margin-bottom: 10px;
          ::after {
            content: "";
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #6e6e6e;
          }
        }
        p {
          color: #808080;
          margin-bottom: 10px;
          max-width: 400px;
        }
        .topics {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          column-gap: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-bottom: 10px;
          @media (min-width: 850px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          span {
            font-size: clamp(10px, 3vw, 15px);
            color: #8f814c;
            white-space: nowrap;
            text-transform: capitalize;
          }
        }
        .trabajo-buttons {
          display: flex;
          justify-content: flex-start;
          button {
            min-width: 100px;
            border: 1px solid #6b6139;
            color: #424242;
            padding: 5px 10px;
            font-weight: 600;
            background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
            transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
            :hover {
              filter: brightness(50%);
              transform: translateY(3px);
            }
            :nth-child(1) {
              background: linear-gradient(to left, black, #080808, black);
              color: #7a7a7a;
            }
          }
        }
        ::after {
          position: absolute;
          content: "";
          height: 10px;
          width: 10px;
          right: auto;
          top: 0;
          left: 0;
          background-color: #8a7d49;
        }
        ::before {
          position: absolute;
          color: #4b4737;
          font-weight: 400;
          font-family: Bebas Neue;
          top: 0;
          letter-spacing: 3px;
          right: 5px;
          /* transform: rotate(180deg); */
          filter: brightness(70%);
        }
        @media (min-width: 850px) {
          /* max-width: 400px; */
          padding: 35px;
        }
        @media ${deviceMinWidth.laptop} {
          padding: 40px;
        }
        @media ${deviceMinWidth.laptopL} {
          max-width: 550px;
          padding: 50px;
        }
      }
    }
    > .destacado-card.reverse {
      justify-content: flex-start;
      .destacado-card-info {
        left: auto;
        right: 0;
        ::after {
          right: 0;
          left: auto;
        }
        ::before {
          right: auto;
          left: 10px;
        }
      }
    }
  }
`;

const Firma = styled.div`
  background: linear-gradient(to right, black, #050505, black);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(30px, 7vw, 70px) 0px;

  > div {
    color: #595959;
    font-family: "Luxurious Script";
    font-size: clamp(20px, 8vw, 70px);
    letter-spacing: 4px;
    margin: auto;
    position: relative;
    opacity: 0.5;
    width: fit-content;
    ::after,
    ::before {
      content: "";
      position: absolute;
      top: 0;
      height: 40%;
      width: 120%;
      left: -10%;
      border: 1px solid #595959;
      border-bottom: none;
    }
    :before {
      top: auto;
      bottom: 0;
      border: 1px solid #595959;
      border-top: none;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: ${devicePx.laptopL};
  z-index: 99;
  padding-bottom: 100px;
`;
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Adornos = styled.span`
  position: absolute;
  bottom: -25px;
  right: 20px;
  display: flex;
  flex-direction: column;
  font-family: Bebas Neue;
  font-size: 80px;
  font-weight: 900;
  color: #292929;
  opacity: 0.3;
  ::before {
    content: "";
    position: relative;
    top: 20px;
    width: 100%;
    height: 10px;
    background-color: #292929;
  }
  &.frase {
    /* color: #8a7d49; */
    color: #5a0601;
    top: calc(15px + 105px);
    right: 0;
    max-width: 80px;
    font-size: 10px;
    opacity: 0.5;
    ::before {
      content: "";
      position: relative;
      width: 100%;
      height: 5px;
      /* background-color: #8a7d49; */
      background-color: #5a0601;
      top: 0;
    }
    @media ${deviceMinWidth.mobileL} {
      top: calc(35vw - 30px);
      max-width: 100px;
      right: 10px;
      font-size: 12px;
    }
    @media ${deviceMinWidth.tablet} {
      top: calc(32vw - 20px);
      max-width: 120px;
      right: 20px;
    }
    @media ${deviceMinWidth.laptop} {
      top: 280px;
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
  background-color: #8a7d49;
  &.dos {
    background-color: #5a0601;
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
    background-color: #5a0601;
  }
`;
