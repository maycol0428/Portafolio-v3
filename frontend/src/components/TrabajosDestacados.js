import React from "react";
import { color } from "../utils/style/Colors";
import { Github } from "@styled-icons/boxicons-logos";
import { LinkExternal } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
const TrabajosDestacados = ({ detacados }) => {
  return (
    <Styled>
      {detacados.map((des, index) => {
        return (
          <Container key={index} className={index % 2 === 0 ? "reverse" : ""}>
            <div className="img">
              {des?.image?.map((img, i) => {
                if (des.image.length === 1) {
                  return <img key={i} id="imageheigh" src={img.url} alt="" />;
                }
                if (des.image.length === 2) {
                  return (
                    <img
                      key={i}
                      id="imageheigh"
                      style={{ objectFit: "contain", maxHeight: "350px", width: "50%" }}
                      src={img.url}
                      alt=""
                    />
                  );
                }
                if (des.image.length === 3) {
                  return (
                    <img
                      key={i}
                      id="imageheigh"
                      style={{ objectFit: "contain", maxHeight: "350px", width: "33.3333%" }}
                      src={img.url}
                      alt=""
                    />
                  );
                }
                return <div />;
              })}
            </div>
            <div className="body">
              <div className="body-info">
                <h3>{des.name.replaceAll("-", " ")}</h3>
                <p>{des.description}</p>
                <div className="trabajotopics">
                  {des.topics.map((topic, i) => {
                    return <span key={i}>■ {topic.replaceAll("-", " ")}</span>;
                  })}
                </div>
              </div>
              <div className="body-buttons">
                <div
                  className="body-button-top"
                  onClick={(e) => {
                    window.open(des.svn_url);
                  }}
                >
                  <span>repositorio</span>
                  <Github></Github>
                </div>
                <div
                  className="body-button-bottom"
                  onClick={(e) => {
                    if (des.homepage) {
                      window.open(des.homepage);
                    }
                  }}
                >
                  <span>{des.homepage ? "web" : "no web"}</span>
                  <LinkExternal></LinkExternal>
                </div>
              </div>
            </div>
          </Container>
        );
      })}
    </Styled>
  );
};

export default TrabajosDestacados;
const Styled = styled.div`
  padding-top: calc(15px + 1vw);
  padding-left: calc(15px + 1vw);
  padding-right: calc(15px + 1vw);
  padding-bottom: calc(15px + 1vw);
  margin-top: clamp(20px, 5vw, 60px);
  background-color: black;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: clamp(40px, 5vw, 60px);

  .img {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 650px;
    background-color: #205246;
    background-color: ${color.BaliHai};
    background-image: linear-gradient(to top, black, transparent);
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;

    :hover {
      background-color: transparent;
      /* background-image: linear-gradient(to top, black, transparent); */
      background-color: ${color.BaliHai};
      img {
        filter: none;
        mix-blend-mode: normal;
        mix-blend-mode: multiply;
      }
    }
    /* :hover:before {
      background: transparent;
    } */

    :before {
      transition: all 0.3s ease;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    }
    img {
      /* width: 33.3333%; */
      filter: grayscale(100%);
      max-width: 650px;
      mix-blend-mode: multiply;
      transition: all 0.3s ease;
    }
  }

  .body {
    background-color: black;
    background-color: ${color.BunkerLow};
    margin-top: 0px;
    position: relative;
    width: 100%;
    border-bottom: 5px;
    display: flex;
    z-index: 2;
    .body-info {
      color: ${color.RockBlue};
      flex: 0.7;
      position: relative;
      z-index: 2;
      background: ${color.BunkerLow};
      background: black;
      clip-path: polygon(100% 0, 100% 50%, 80% 100%, 0% 100%, 0 0%, 0% 0%);
      padding: 10px;

      h3 {
        color: ${color.RockBlue};
        font-size: clamp(18px, 4vw, 25px);
        text-transform: capitalize;
        margin-bottom: 10px;
      }
      p {
        font-size: clamp(11px, 4vw, 17px);
        color: ${color.BaliHai};
        color: ${color.ShuttleGray};
        margin-right: 20px;
        margin-bottom: 10px;
      }
      .trabajotopics {
        padding: 0px 10px;
        margin-left: 10px;
        margin-right: calc(20px + 1vmax);
        padding-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        > span {
          color: ${color.PuertoRico};
          font-size: clamp(9px, 3vw, 13px);
        }
      }
    }
    .body-buttons {
      flex: 0.3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      svg {
        height: 30px;
      }
      .body-button-top,
      .body-button-bottom {
        transition: all 0.3s ease;
        cursor: pointer;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          font-size: clamp(11px, 4vw, 17px);
        }
      }
      .body-button-top {
        flex: 0.49;
        background-color: black;
        display: flex;
        justify-content: center;
        position: relative;
        > svg,
        span {
          color: ${color.RockBlue};
        }
      }
      .body-button-bottom {
        flex: 0.49;
        width: 150%;
        position: relative;
        left: -50%;
        background-color: ${color.PuertoRico};
        display: flex;

        > svg,
        span {
          margin-left: 33%;
          color: ${color.Bunker};
        }
      }
      .body-button-top:hover {
        opacity: 0.3;
      }
      .body-button-bottom:hover {
        opacity: 0.3;
      }
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    .body {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 60%;
    }
    .img {
      background-image: linear-gradient(to left, black, transparent);
    }
    .img {
      :before {
        background: linear-gradient(to left, black, transparent);
      }
    }
    &.reverse {
      flex-direction: row-reverse;
      .body {
        left: 0;
        top: 50%;
      }
      .img {
        background-image: linear-gradient(to right, black, transparent);
      }
      .img {
        :before {
          background: linear-gradient(to right, black, transparent);
        }
      }
    }
  }
`;
