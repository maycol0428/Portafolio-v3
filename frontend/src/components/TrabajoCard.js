import { Github } from "@styled-icons/boxicons-logos";
import { Folder, LinkExternal } from "@styled-icons/boxicons-regular";
import React from "react";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
const TrabajoCard = ({ repository }) => {
  return (
    <TrabajoCardStyled>
      <div className="default-top">
        <Folder className="first"></Folder>

        <div className="second">
          <a href={`${repository.svn_url}`} target="_blank" rel="noreferrer">
            <span>Github</span>
            <Github></Github>
          </a>
          <a href={`${repository.homepage}`} target="_blank" rel="noreferrer">
            <span>http//..</span>
            <LinkExternal></LinkExternal>
          </a>
        </div>
      </div>
      <h3>{repository.name.replaceAll("-", " ")}</h3>
      <p>{repository.description}</p>
      <TrabajoTopics>
        {repository.topics.map((topic, i) => {
          return <span key={i}>{topic}</span>;
        })}
      </TrabajoTopics>
    </TrabajoCardStyled>
  );
};

export default TrabajoCard;
const TrabajoCardStyled = styled.div`
  cursor: pointer;
  color: ${color.BaliHai};
  background-color: #080a0e;
  position: relative;
  box-shadow: ${color.ShuttleGray} 0px 3px 6px -3px, rgba(0, 0, 0, 0.3) 0px 2px 3px -3px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-shadow: ${color.MoonRaker} 0px 5px 15px; */
  transition: all 0.2s ease;
  :hover {
    transform: translateY(-10px);
    box-shadow: ${color.PuertoRico} 0px 10px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 10px;

  .default-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: black;
    .first {
      height: 40px;
      color: ${color.PuertoRico};
    }
    .second {
      display: flex;
      align-items: center;
      flex-direction: row;
      a {
        transition: all 0.3s ease;
        font-size: clamp(9px, 3vw, 13px);
        :hover {
          color: ${color.PuertoRico};
        }
        span {
          margin-right: 3px;
        }
        svg {
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }
  h3 {
    color: ${color.BunkerLow};
    color: ${color.BaliHai};

    font-size: clamp(18px, 4vw, 25px);
    padding: 0px 10px;
    text-transform: capitalize;
  }
  p {
    font-size: clamp(11px, 4vw, 17px);
    padding: 0px 10px;
    color: ${color.BaliHai};

    color: ${color.ShuttleGray};
  }
`;
const TrabajoTopics = styled.div`
  padding: 0px 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  > span {
    color: ${color.PuertoRico};
    font-size: clamp(9px, 3vw, 13px);
  }
`;
