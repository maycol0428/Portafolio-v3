import React, { Fragment } from "react";
import Header from "../components/Header";
import SobreMi from "../components/SobreMi";
import Welcome from "../components/Welcome";
import styled from "styled-components";
import Trabajos from "../components/Trabajos";
import Contacto from "../components/Contacto";
import lunaIMG from "../static/luna.jpg";

const sections = [
  {
    title: "Welcome",
    component: Welcome,
    id: "welcome",
  },
  {
    title: "SOBRE MI",
    component: SobreMi,
    id: "sobremi",
  },
  {
    title: "Trabajos",
    component: Trabajos,
    id: "trabajos",
  },
  {
    title: "Contacto",
    component: Contacto,
    id: "contacto",
  },
];

const Home = () => {
  return (
    <>
      <Header></Header>
      <Main>
        {sections.map(({ component: Component, title, id }, i) => {
          return (
            <Fragment key={i}>
              <Section
                key={i}
                id={id}
                className={[
                  id === "contacto" ? "contacto" : "",
                  id === "welcome" ? "welcome" : "",
                  id === "trabajos" ? "trabajos" : "",
                  id === "sobremi" ? "sobremi" : "",
                ]}
              >
                <Component title={`0${i}. ${title}`} />
              </Section>
            </Fragment>
          );
        })}
      </Main>
    </>
  );
};

export default Home;

const Main = styled.main`
  margin: auto;
  position: relative;
`;
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: clamp(50px, 8vw, 100px);
  overflow: hidden;
  &.welcome {
    padding: 60px 0px;
    background-image: url(${lunaIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ::after,
    ::before {
      content: "";
      position: absolute;
      z-index: 10;
      bottom: 20px;
      left: 20px;
      width: 50px;
      height: 50px;
      border-left: 1px solid #757575;
      border-bottom: 1px solid #757575;
    }
    ::before {
      left: auto;
      right: 20px;
      border-left: none;
      border-right: 1px solid #757575;
    }
  }
  &.sobremi {
    padding-top: 50px;
    background: linear-gradient(to right, #8a7d49, #c1b891, #8a7d49);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      background: #030303;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 20px;
      width: 1px;
      height: 100%;
      background: #030303;
    }
  }
  &.trabajos {
    background: linear-gradient(to right, black, #050505, black);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    border-bottom: 1px solid #757575;

    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      background: #8a7d49;
    }
    ::before {
      content: "";
      position: absolute;
      left: 20px;
      width: 1px;
      height: 100%;
      background: #757575;
    }
  }
  &.contacto {
    min-height: min-content;
    background: linear-gradient(to right, black, #050505, black);
    background-position: center
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    ::after,
    ::before {
      content: "";
      position: absolute;
      z-index: 10;
      bottom: 20px;
      left: 20px;
      width: 50px;
      height: 50px;
      border-left: 1px solid #757575;
      border-bottom: 1px solid #757575;
    }
    ::before {
      left: auto;
      right: 20px;
      border-left: none;
      border-right: 1px solid #757575;
    }
  }
`;
