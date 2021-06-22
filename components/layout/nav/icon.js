import React from "react";
import { css } from "@emotion/css";

export const menu = () => {
  const IJNsvg = css`
    transition-duration: 750ms;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
    }
  `;

  return (
    <>
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        className={IJNsvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
      </svg>
    </>
  );
};

export const close = () => {
  const IJNsvg = css`
    transition-duration: 750ms;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
    }
  `;

  return (
    <>
      <svg
        width="17.678"
        height="17.678"
        viewBox="0 0 17.678 17.678"
        className={IJNsvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-1871.161 -37.661)">
          <rect
            width="22"
            height="3"
            rx="1.5"
            transform="translate(1871.161 53.218) rotate(-45)"
            fill="#fff"
          />
          <rect
            width="22"
            height="3"
            rx="1.5"
            transform="translate(1873.282 37.661) rotate(45)"
            fill="#fff"
          />
        </g>
      </svg>
    </>
  );
};
