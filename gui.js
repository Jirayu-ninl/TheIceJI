import React, { Suspense, useState } from "react";
import { css } from "@emotion/css";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Global State
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "components/context/globalContext";

// IJN Components
import IJN from "components/theme/TheIceJI";
import Panel from "components/layout/gui/panel";
import FooterSocial from "components/layout/gui/footerSocial";
import FooterText from "components/layout/gui/footerText";
import TopPanelC from "components/layout/gui/topPanelC";
import TopPanelR from "components/layout/gui/topPanelR";
import About from "components/layout/gui/about/";
import Maintenance from "components/maintenance";

import { IJNnav as Nav, Canvas as NavCanvas } from "components/layout/nav";

// 3js
import { Canvas } from "react-three-fiber";
import { Loader } from "drei";
import { OrbitControls } from "drei";
import Lights from "components/app/three/lights";
import IJNtext from "components/app/three/model/IJNtext";

export default function gui() {
  const SEO = {
    title: "TheIceJI - Jirayu Ninlapun Official Website",
    description:
      "I'm Jirayu Ninlapun, studying Cinematic Art at Bangkok University. Experience: 7 years in Graphics Design, 5 years in VFX & Editor, and 2 years in Web Developer. ",
  };

  const dispatch = useGlobalDispatchContext();

  // Cursor State
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  // State
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [ModalState, setModalState] = useState(true);

  // CSS -- Hero Background

  const heroContainer = css`
    background-color: #000;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
  `;

  const ParaBG = css`
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(41, 41, 41, 1) 100%
    );
    background-size: cover;
    background-position: center;
  `;
  const ParaGrid = css`
    opacity: 1;
    background: url(/gui/grid.png);
    background-size: cover;
  `;

  return (
    <>
      <NextSeo {...SEO} />
      <Nav
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <NavCanvas
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <div className={heroContainer}>
        <IJN.Layer fluid tl0 className={ParaBG}></IJN.Layer>
        <IJN.Layer fluid tl0 className={ParaGrid}></IJN.Layer>
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [0, 0, 7], fov: 40 }}
        >
          <Lights />
          <Suspense fallback={null}>
            <IJNtext />
            <OrbitControls />
          </Suspense>
        </Canvas>
        <TopPanelC />
        <TopPanelR />
        <FooterSocial opacity={0.6} />
        <FooterText toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} />
        <About toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} />
        <Maintenance ModalState={ModalState} setModalState={setModalState} />
        <IJN.Layer b={117} l={64}>
          <motion.div
            drag
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={{
              top: -300,
              left: -150,
              right: 500,
              bottom: 100,
            }}
          >
            <Panel />
          </motion.div>
        </IJN.Layer>
      </div>
      {/* <Loader /> */}
    </>
  );
}
