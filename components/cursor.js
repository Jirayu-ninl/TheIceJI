import React, { useEffect, useRef } from "react";
// import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useGlobalStateContext } from "components/context/globalContext";

function cursor({ toggleMenu }) {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef(null);
  const cursor2 = useRef(null);

  
  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
    cursor2.current.style.left = `${clientX}px`;
    cursor2.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const MainCursor = css`
    position: fixed;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 0.1s ease-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    transform-origin: center;
    z-index: 500;
    background-color: #fff;
    mix-blend-mode: difference;
    &.pointer {
      /* transform-origin: center; */
      /* transform: translate(-50%, -50%) scale(5); */
    }
    &.logo {
      height: 80px;
      width: 80px;
      background-color: #000;
      mix-blend-mode: normal;
      transition-duration: 250ms;
    }
    &.go {
      height: 57px;
      width: 57px;
      background: url(/cursor/Cursor.png);
      mix-blend-mode: normal;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
    }
  `;

  const CursorBig = css`
    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 500;
    height: 40px;
    width: 40px;
    transition: all 0.3s ease-out;
    will-change: width, height, transform, border;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid #fff;
    opacity: 0.7;
    transition-duration: 250ms;
    &.hovered {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
  `;

  return (
    <div>
      <div className={`${MainCursor} ${cursorType}`} ref={cursor} />
      <div
        ref={cursor2}
        className={`${CursorBig} ${!!cursorType ? "hovered" : ""}`}
      />
    </div>
  );
}

export default cursor;
