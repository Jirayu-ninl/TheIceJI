import React from "react";
import Maintenance from "components/maintenance";
import { css } from "@emotion/css";

export default function testCom() {
  const BG = css`
    background-color: grey;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <>
      <div className={BG}>
        <Maintenance />
        <h1>Hello</h1>
      </div>
    </>
  );
}
