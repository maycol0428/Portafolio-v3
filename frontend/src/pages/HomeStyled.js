import styled from "styled-components";
import { deviceMinWidth } from "../utils/style/BreakPoints";
import { color } from "../utils/style/Colors";
import { size } from "../utils/style/FontSize";
export const Main = styled.div`
  margin-top: 40px;
`;
export const Section = styled.section`
  min-height: 100vh;
`;
export const Section2 = styled.section`
  min-height: 100vh;
`;

export const Info = styled.div`
  margin-top: -50px;
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background-color: ${color.Bunker};
    border-radius: 0 0 50px 0;
    border: 1px solid black;
    padding: 10px 0;
    box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
    -webkit-box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
    -moz-box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
  }
  div:nth-child(1) {
    width: 100%;

    align-items: center;
    color: ${color.MoonRaker};
    padding-top: 30px;
    h1 {
      font-weight: 900;
      font-family: "Lato";
      font-size: clamp(${size.heading}, 8vw, ${size.headingx2});
    }
  }
  div:nth-child(2) {
    width: 85%;

    align-items: center;
    color: ${color.RockBlue};
    h2 {
      font-family: "Lato";
      font-size: clamp(${size.xxl}, 7vw, 50px);
    }
  }
  div:nth-child(3) {
    min-height: 150px;
    width: 70%;
    color: ${color.BaliHai};
    p {
      margin-right: 20px;
      max-width: 500px;
      font-family: "Lato";
      font-size: clamp(${size.md}, 4vw, ${size.xxl});
    }
  }
  div: nth-child(4) {
    border: none;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    height: 100px;
    padding: 0px;
    a {
      display: inline-block;
      border-radius: 0 0 50px 0;
      font-size: ${size.xxl};
      padding: clamp(10px, 4vw, 30px) clamp(20px, 8vw, 50px);
      padding: clamp(10px, 4vw, 30px) 0;
      transition: all 0.2s ease;
      box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
      -webkit-box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
      -moz-box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);

      .bsimgx {
        height: clamp(60px, 8vw, 70px);
      }

      :hover {
        background-color: ${color.PuertoRico};
        color: ${color.Bunker};
      }
    }
  } ;
`;
