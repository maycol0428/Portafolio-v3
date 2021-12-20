import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deviceMinWidth } from "../utils/style/BreakPoints";
import { Backdrop } from "@mui/material";
const Logo = () => {
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
  // useEffect(() => {
  //   const sections = document.querySelectorAll("section.sectionHome");
  //   let observer = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setSectionId(entry.target.id);
  //           return;
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );
  //   let observerLargue = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setSectionId(entry.target.id);
  //           return;
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );
  //   Array.from(sections).forEach((section) => {
  //     if (section.id === SECTIONS_ID.TRABAJOS_ID) {
  //       return observerLargue.observe(section);
  //     }
  //     observer.observe(section);
  //   });
  // }, []);

  // const sectionIntersection = (sectionId) => {
  //   return (
  //     <>
  //       <TopbarItem
  //         className={[
  //           `${scrollDown ? "scrollDown" : ""}`,
  //           "right",
  //           `${sectionId === SECTIONS_ID.WELCOME_ID ? "rightvisible" : ""}`,
  //         ]}
  //         elevation={1}
  //       >
  //         <div>
  //           <p style={{ visibility: "hidden" }}>a</p>
  //           <Javascript></Javascript>
  //           <ReactLogo className="bx-spin"></ReactLogo>
  //           <Nodejs></Nodejs>
  //           <p style={{ visibility: "hidden" }}>a</p>
  //         </div>
  //       </TopbarItem>
  //       <TopbarItem
  //         className={[
  //           `${scrollDown ? "scrollDown" : ""}`,
  //           "right",
  //           `${sectionId === SECTIONS_ID.SOBRE_MI_ID ? "rightvisible" : ""}`,
  //         ]}
  //         elevation={1}
  //       >
  //         <div>28 DE ABRIL~TAURO♉</div>
  //       </TopbarItem>
  //       <TopbarItem
  //         className={[
  //           `${scrollDown ? "scrollDown" : ""}`,
  //           "right",
  //           `${sectionId === SECTIONS_ID.TRABAJOS_ID ? "rightvisible" : ""}`,
  //         ]}
  //         elevation={1}
  //       >
  //         <div>+51 950341940⚡</div>
  //       </TopbarItem>
  //       <TopbarItem
  //         className={[
  //           `${scrollDown ? "scrollDown" : ""}`,
  //           "right",
  //           `${sectionId === SECTIONS_ID.CONTACTO_ID ? "rightvisible" : ""}`,
  //         ]}
  //         elevation={1}
  //       >
  //         <div>SALUDOS🎉😉</div>
  //       </TopbarItem>
  //     </>
  //   );
  // };
  return (
    <Header>
      <Menu>
        <LogoStyled className={["logomenu", !scrollDown || "scrolldown"]}>
          <a href="/">M</a>
        </LogoStyled>

        <Hamburguer>
          <div className="lineamiddle"></div>
        </Hamburguer>
        <HamburguerItem>
          <Backdrop></Backdrop>
        </HamburguerItem>
      </Menu>
    </Header>
  );
};

export default Logo;
const HamburguerItem = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: red;
  z-index: 999999;
`;
const Hamburguer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .lineamiddle {
    position: relative;
    width: 20px;
    height: 1px;
    background-color: #757575;
    ::after,
    ::before {
      content: "";
      position: absolute;
      top: -10px;
      right: 0;
      width: calc(100% + 10px);
      height: 1px;
      background-color: #757575;
    }
    ::before {
      top: 10px;
      width: calc(100% - 10px);
    }
  }
`;
const Header = styled.div`
  z-index: 9999;
  height: 50px;
  position: fixed;
  font-family: Readex Pro;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.div`
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
    opacity: 0.3;
    color: #757575;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
    }
    ::before {
      top: 0;
      border-left: 1px solid #757575;
      border-top: 1px solid #757575;
      border-right: 1px solid #757575;
      border-bottom: 0;
    }
    > a {
      font-size: clamp(16px, 5vw, 20px);
      font-weight: 400;
    }
    &.scrolldown {
      opacity: 1;
    }
  }

  /* &.logofondo {
    color: #757575;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 9;
    @media ${deviceMinWidth.mobileM} {
      top: 80px;
    }
    @media ${deviceMinWidth.tablet} {
      top: 60px;
    }
    @media ${deviceMinWidth.laptopn} {
      top: 70px;
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
  } */
`;
