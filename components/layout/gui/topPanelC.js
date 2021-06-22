import React from "react";
import { css } from "@emotion/css";

export default function topPanelC() {
  const Panel = css`
    position: absolute;
    left: 50%;
    top: 83px;
    width: 233px;
    height: 21px;
    transform: translateX(-50%);
    background: url(/gui/ViewControlC.png);
    /* background-color: #000; */
  `;

  return (
    <div>
      <div className={Panel}>{/* <h3>Panel</h3> */}</div>
    </div>
  );
}
