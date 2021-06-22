import React from "react";
import { css } from "@emotion/css";

export default function topPanelR() {
  const Panel = css`
    position: absolute;
    right: 29px;
    top: 83px;
    width: 233px;
    height: 21px;
    background: url(/gui/ViewControlR.png);
    /* background-color: #000; */
  `;

  return (
    <div>
      <div className={Panel}>{/* <h3>Panel</h3> */}</div>
    </div>
  );
}
