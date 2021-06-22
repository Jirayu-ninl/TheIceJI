import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { Nav } from "components/theme/TheIceJI";
import { cx, css } from "@emotion/css";
import { menu as MenuIcon, close as CloseIcon } from "./icon";
import { useGlobalDispatchContext } from "components/context/globalContext";

export default function IJNnav({ onCursor, setToggleMenu, toggleMenu }) {
  const dispatch = useGlobalDispatchContext();
  const [ScrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handle);

    let LastScrollTop = 0;
    function handle(e) {
      let Offset = window.pageYOffset || document.documentElement.scrollTop;
      if (Offset > 50) {
        if (LastScrollTop > Offset) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      } else {
        setScrollNav(false);
      }
      LastScrollTop = Offset;
    }

    return () => window.removeEventListener("scroll", handle);
  }, []);

  // CSS Style
  const fixedMenu = css`
    position: fixed;
    top: -64px;
    right: -64px;
    background-color: #2a2a2a;
    fill: #fff;
    height: 128px;
    width: 128px;
    border-radius: 50%;
    transform: translate(50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 400;
    transition-duration: 150ms;
    padding: 48px 48px 0 0;
    &:hover {
      top: -64px;
      right: -64px;
      transform: scale(1.5);
      transition-duration: 150ms;
    }
  `;

  const fixedMenuActive = css`
    top: 0;
    right: 0;
    transition-duration: 500ms;
  `;

  return (
    <>
      <Nav.Bar
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -72, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        transparent
        pX={28}
        H={96}
        light
        style={
          toggleMenu
            ? { position: "fixed", width: "100%" }
            : { position: "absolute", width: "100%" }
        }
      >
        <Nav.Brand
          onMouseEnter={() => onCursor("logo")}
          onMouseLeave={onCursor}
        >
          <img src="/logo_white.svg" height="40" alt="TheIceJI logo" href="#" />
        </Nav.Brand>
        <Nav.Icon
          onMouseEnter={() => onCursor("logo")}
          onMouseLeave={onCursor}
          onClick={() => {
            setToggleMenu(!toggleMenu);
            dispatch({ type: "CURSOR_TYPE", cursorType: false });
          }}
        >
          {toggleMenu ? <CloseIcon /> : <MenuIcon />}
        </Nav.Icon>
      </Nav.Bar>
      <nav
        className={ScrollNav ? cx(fixedMenu, fixedMenuActive) : fixedMenu}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <MenuIcon />
      </nav>
    </>
  );
}
