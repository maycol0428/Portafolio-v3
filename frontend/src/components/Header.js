import { Backdrop, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deviceMinWidth } from "../utils/style/BreakPoints";
import PDFFILE from "../files/cv.pdf";
const Header = () => {
  const laptopDevice = useMediaQuery(deviceMinWidth.laptop);
  const [scrollDown, setScrollDown] = useState(false);
  const [showHamburguerItems, setShowHamburguerItems] = useState(false);

  useEffect(() => {
    const scrollEvent = (e) => {
      if (document.documentElement.scrollTop > 10) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  useEffect(() => {
    if (laptopDevice) {
      setShowHamburguerItems(false);
    }
  }, [laptopDevice]);
  return (
    <>
      <HeaderStyled>
        <Menu>
          <LogoStyled
            className={[`logomenu  ${!scrollDown || "scrolldown"} ${!showHamburguerItems || "show-in-logo"}`]}
          >
            <a href="/">M</a>
          </LogoStyled>

          {laptopDevice ? (
            <MenuItems>
              <div>
                <a href="#welcome">00. INICIO</a>
                <a href="#sobremi">01. SOBRE MI</a>
                <a href="#trabajos">02. TRABAJOS</a>
                <a href="#contacto">03. CONTACTO</a>
              </div>
              <a href={PDFFILE} target="_blank" rel="noreferrer">
                RESUMEN
              </a>
            </MenuItems>
          ) : (
            <Hamburguer onClick={() => setShowHamburguerItems(!showHamburguerItems)}>
              <div className={[`lineamiddle ${!showHamburguerItems || "show-in-hamburguer"}`]}></div>
              <HamburguerItems className={`${!showHamburguerItems || "show-in-hamburguerItems"}`}>
                <BackdropStyled
                  onClick={() => setShowHamburguerItems(!showHamburguerItems)}
                  open={showHamburguerItems}
                ></BackdropStyled>
                <HamburguerItem
                  href="#welcome"
                  className={`hamburguer1 ${!showHamburguerItems || "show"}`}
                  style={{ "--i": 1.15, "--acc": 1, "--sobremi": "'01.'" }}
                >
                  {" "}
                  <div>00.INICIO</div>
                </HamburguerItem>
                <HamburguerItem
                  href="#sobremi"
                  className={`hamburguer1 ${!showHamburguerItems || "show"}`}
                  style={{ "--i": 1.3, "--acc": 1.1, "--sobremi": "'02.'" }}
                >
                  <div>01.SOBRE MI</div>
                </HamburguerItem>
                <HamburguerItem
                  href="#trabajos"
                  className={`hamburguer2 ${!showHamburguerItems || "show"}`}
                  style={{ "--i": 1.45, "--acc": 1.2 }}
                >
                  <div>02.TRABAJOS</div>
                </HamburguerItem>
                <HamburguerItem
                  href="#contacto"
                  className={`hamburguer3 ${!showHamburguerItems || "show"}`}
                  style={{ "--i": 1.6, "--acc": 1.2 }}
                >
                  <div>03.CONTACTO</div>
                </HamburguerItem>
                <HamburguerItem
                  href={PDFFILE}
                  target={"_blank"}
                  className={`hamburguer4 hambuerguer-item-pdf ${!showHamburguerItems || "show"}`}
                  style={{ "--i": 1, "--acc": 1.7 }}
                >
                  <div>RESUMEN</div>
                </HamburguerItem>
              </HamburguerItems>
            </Hamburguer>
          )}
        </Menu>
      </HeaderStyled>
    </>
  );
};

export default Header;
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  > div {
    margin-left: 5vw;
    display: flex;
    gap: 30px;
    @media ${deviceMinWidth.laptopL} {
      margin-left: 10vw;
    }
    @media ${deviceMinWidth.laptoxL} {
      margin-left: 13vw;
    }
  }
  a {
    color: #757575;
    position: relative;
    padding: 1px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-family: Poppins;
    font-size: 13px;
    font-weight: 600;
    position: relative;
    ::after {
      content: "";
    }
    :hover {
      color: #8a7d49;
    }
  }
  > a:nth-child(2) {
    border: 2px solid #757575;
    padding: 5px 15px;
    :hover {
      border-color: #8a7d49;
    }
  }
`;
const BackdropStyled = styled(Backdrop)`
  backdrop-filter: blur(2px) grayscale(30%) brightness(50%);
  margin-top: 50px;
`;
const HamburguerItems = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  z-index: -1;
  width: 0;
  &.show-in-hamburguerItems {
    width: fit-content;
  }
`;
const HamburguerItem = styled.a`
  position: relative;
  margin-bottom: 7px;
  top: 0;
  right: 0;
  text-align: center;
  background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
  border: 1px solid #6b6139;
  color: #424242;
  width: calc(50vw * var(--i));
  height: 10vh;
  line-height: 10vh;
  display: flex;
  justify-content: flex-end;
  transition: all calc(0.4s * var(--i) * var(--acc)) ease-in-out, filter 0.2s ease;

  :hover {
    filter: brightness(160%);
  }

  > div {
    width: 50vw;
    font-family: Bebas Neue;
    letter-spacing: 1px;
    font-style: italic;
    position: relative;
    ::after {
      content: "";
      width: 50%;
      height: 10px;
      left: 50%;
      position: absolute;
      bottom: 25%;
      transform: translateX(-50%);
      background-color: #8a7d49;
      filter: brightness(50%);
      opacity: 0.3;
    }
  }
  &.hambuerguer-item-pdf {
    background: linear-gradient(to right, black, #050505, black);
    border: 1px solid #9e8f54;
    color: #9e8f54;
    div {
      ::after {
        opacity: 1;
        background-color: #9e8f54;
      }
    }
  }
  transform: translateX(101%);
  &.show {
    transform: none;
  }
`;
const Hamburguer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 14px 20px;
  padding-right: 0;

  > .lineamiddle {
    position: relative;
    width: 20px;
    height: 1px;
    background-color: #757575;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    ::after,
    ::before {
      content: "";
      position: absolute;
      top: -10px;
      right: 0;
      width: calc(100% + 10px);
      height: 1px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: #757575;
    }
    ::before {
      top: 10px;
      width: calc(100% - 10px);
    }
    &.show-in-hamburguer {
      background-color: #8a7d49;
      border-bottom: 10px solid #5a0601;
      ::after {
        top: 5px;
        transform: rotate(90deg);
        width: calc(100% + 20px);
      }
      ::before {
        width: calc(100% + 20px);
      }
      ::after,
      ::before {
        background-color: #8a7d49;
      }
    }
  }
`;
const HeaderStyled = styled.div`
  z-index: 999;
  height: 50px;
  position: fixed;
  font-family: Readex Pro;
  background-color: transparent;
  top: -1px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.div`
  z-index: 9999;
  width: 100%;
  max-width: 1920px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
`;
const LogoStyled = styled.div`
  &.logomenu {
    opacity: 1;
    color: #757575;
    position: relative;
    padding: 1px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover {
      color: #8a7d49;
      ::after,
      ::before {
        border-color: #8a7d49;
      }
    }
    ::after,
    ::before {
      content: "";
      position: absolute;
      width: 180%;
      height: 40%;
      left: -40%;
      bottom: 0;
      border-left: 1px solid #757575;
      border-bottom: 1px solid #757575;
      border-right: 1px solid #757575;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    ::before {
      top: 0;
      border-left: 1px solid #757575;
      border-top: 1px solid #757575;
      border-right: 1px solid #757575;
      border-bottom: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    > a {
      font-size: clamp(16px, 5vw, 20px);
      font-weight: 400;
    }
    &.scrolldown {
      opacity: 1;
      filter: brightness(150%);
    }
  }
  &.show-in-logo {
    opacity: 1;
    color: #8a7d49;
    ::after,
    ::before {
      border-color: #8a7d49;
    }
  }
`;
