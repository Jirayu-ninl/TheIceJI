import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { NextSeo } from "next-seo";

export default function home() {
  const SEO = {
    title: "TheIceJI - Jirayu Ninlapun Official Website",
    description:
      "I'm Jirayu Ninlapun, studying Cinematic Art at Bangkok University. Experience: 7 years in Graphics Design, 5 years in VFX & Editor, and 2 years in Web Developer. ",
  };

  useEffect(() => {});

  const heroContainer = css`
    /* background-color: #000; */
    /* height: 100vh; */
  `;

  // Hero - Center Rich Text
  const heroText = css`
    color: #fff;
    width: 1440px;
    position: relative;
    & h1 {
      font-size: 276px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0);
      opacity: 0.6;
      -webkit-text-stroke: 3px #fff;
      position: absolute;
    }
  `;

  const subText = css`
    /* background-color: green; */
    width: 100%;
    height: 100px;
    text-align: right;
    position: absolute;
    & h4 {
      font-size: 41px;
      font-weight: 600;
      opacity: 0.4;
      line-height: 1;
      margin-bottom: 170px;
      margin-right: 50px;
    }
    & h3 {
      font-weight: 600;
      font-size: 41px;
      font-family: poppins;
      opacity: 0.8;
      line-height: 0;
    }
  `;

  const TextJirayu = css`
    position: absolute;
    margin-top: -30px;
    & > h2 {
      font-size: 160px;
      font-family: poppins;
      color: #fff;
      margin: 0 0 0 100px;
      font-weight: 600;
    }
  `;

  return (
    <>
      <NextSeo {...SEO} />
      <div className={heroContainer}>
        <div className={heroText}>
          <h1>NINLAPUN</h1>
          <div className={subText}>
            <h4>Welcome to</h4>
            <h3>WEBSITE</h3>
          </div>
          <div className={TextJirayu}>
            <h2>JIRAYU</h2>
          </div>
        </div>
      </div>
    </>
  );
}
