import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { CodeAlt, MenuAltLeft, User } from "@styled-icons/boxicons-regular";
import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { color } from "../utils/style/Colors";
import { Send } from "@styled-icons/boxicons-solid";

const actions = [
  { icon: <User size={25} />, name: "01. Sobre mi", fn: sobreMi },
  { icon: <CodeAlt size={25} />, name: "02. Trabajos", fn: trabajos },
  { icon: <Send size={25} />, name: "03. Contacto", fn: contacto },
  {
    icon: <Facebook size={25} />,
    name: "Facebook",
    fn: FacebookHandler,
  },
  { icon: <Instagram size={25} />, name: "Instagram", fn: InstagramHandler },
  { icon: <Whatsapp size={25} />, name: "Whatsapp", fn: WhatsappHandler },
];
function FacebookHandler(params) {
  window.open("https://www.facebook.com/maycolchristian.em");
}
function InstagramHandler(params) {
  window.open("https://www.instagram.com/maycol0428/");
}
function WhatsappHandler(params) {
  window.open("https://api.whatsapp.com/send?phone=51950341940");
}
function sobreMi(params) {
  const section = document.getElementById("sobremi");
  section.scrollIntoView({ behavior: "smooth" });
}
function trabajos(params) {
  const section = document.getElementById("trabajos");
  section.scrollIntoView({ behavior: "smooth" });
}
function contacto(params) {
  const section = document.getElementById("contacto");
  section.scrollIntoView({ behavior: "smooth" });
}
const HeaderMenuHamburguer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    const scrollEventHandler = (e) => {
      if (document.documentElement.scrollTop > 10) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };
    window.addEventListener("scroll", scrollEventHandler);
    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, []);
  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 10, backdropFilter: "blur(4px) grayscale(100%) brightness(80%)" }} />
      <SpeedDialStyled
        ariaLabel="SpeedDial tooltip example"
        icon={<MenuAltLeft className={[!open || "bx-burst", !scrollDown || "svgscrolldown"]} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        className={!scrollDown || "scroldown"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              action.fn();
              handleClose();
            }}
          />
        ))}
      </SpeedDialStyled>
    </>
  );
};

export default HeaderMenuHamburguer;
const SpeedDialStyled = styled(SpeedDial)`
  position: fixed;
  bottom: 16px;
  right: 16px;

  svg {
    height: clamp(40px, 5vw, 50px);
    transition: all 0.2s ease;
    /* opacity: 0.5; */
    &.svgscrolldown {
      height: clamp(20px, 5vw, 30px);
    }
  }

  .MuiButtonBase-root {
    width: clamp(70px, 8vw, 90px);
    height: clamp(70px, 8vw, 90px);
    transition: all 0.2s ease;

    svg {
      color: ${color.red_4};
    }
  }
  &.scroldown > .MuiButtonBase-root {
    border: 2px solid ${color.red_9};
    background-color: ${color.red_10};
  }
  .MuiSpeedDial-actions button {
    overflow: hidden;
    width: clamp(60px, 8vw, 90px);
    height: clamp(60px, 8vw, 90px);
  }

  .MuiSpeedDial-fab {
    background-color: ${(props) => (props.open ? color.red_10 : color.black)};
    color: ${(props) => (props.open ? color.black : color.red_10)};
  }
  .MuiSpeedDial-fab:hover {
    background-color: ${(props) => (props.open ? color.black : color.red_10)};
    color: ${(props) => (props.open ? color.red_10 : color.black)};
  }

  .MuiSpeedDialAction-fab {
    background-color: ${color.black};
    transition: background-color 0.2s ease;
    border: 5px solid ${color.red_10};

    :hover {
      background-color: ${color.red_7};
      svg {
        color: ${color.Bunker};
      }
    }
  }
  .MuiSpeedDialAction-staticTooltipLabel {
    background-color: ${color.red_10};
    border: 1px solid ${color.red_9};
    color: ${color.red_5};
    white-space: nowrap;
    font-family: "Roboto";
    border-radius: 0;
    font-weight: 600;
  }
`;
