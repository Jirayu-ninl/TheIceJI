import React from "react";
import { css } from "@emotion/css";

export default function footerText({ toggleAbout, setToggleAbout }) {
  const FooterText = css`
    position: absolute;
    right: 20px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > p {
      color: #fff;
      line-height: 0;
      & > span {
        opacity: 0.4;
      }
      & > a {
        opacity: 0.6;
        color: #fff;
        text-decoration: none;
        transition-duration: 600ms;
        cursor: pointer;
        &:hover {
          opacity: 1;
          transition-duration: 200ms;
        }
      }
    }
  `;

  return (
    <div className={FooterText}>
      <p>
        <a
          onClick={() => {
            setToggleAbout(!toggleAbout);
          }}
        >
          TheIceJI v1.0b3
        </a>
        <span> | React v17.0.1 | NextJS v10.0.8</span>
      </p>
      <p>
        <span>Copyright ©2021 Designed by </span>
        <a href="http://TheIceJI.com">Jirayu Ninlapun</a>
        <span>. All rights reserved</span>
      </p>
    </div>
  );
}
