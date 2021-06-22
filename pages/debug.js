import React, { useState, useEffect } from "react";
import mouseTrack from "components/hooks/useMouseTrack";
import IJN from "components/theme/TheIceJI";
import { useGlobalStateContext } from "components/context/globalContext";
import { motion } from "framer-motion";

export default function debug() {
  const { x, y, movementX, movementY, scrollY } = mouseTrack();
  const { cursorType } = useGlobalStateContext();
  return (
    <>
      <IJN.Section Yc H100vh style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#fff" }}>TheIceJI Debug Mode</h1>
        <IJN.Container pt={50} lg>
          <IJN.Flex
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -72, opacity: 0 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
            Jcb
            W100
          >
            <datachild>
              <h3>MousePosition</h3>
              <p>Position X is {x}</p>
              <p>Position Y is {y}</p>
            </datachild>
            <datachild>
              <h3>MouseMove</h3>
              <p>Position X is {movementX}</p>
              <p>Position Y is {movementY}</p>
            </datachild>
            <datachild>
              <h3>ScrollEvent</h3>
              <p>ScrollY is {scrollY}</p>
              <p>Cursor State: {cursorType ? cursorType : null}</p>
            </datachild>
            <datachild>
              <h3>Fetched Data</h3>
              <p>API is TRUE</p>
              <p>Status is Done</p>
            </datachild>
          </IJN.Flex>
        </IJN.Container>
      </IJN.Section>
      <style jsx>{`
        datachild h3 {
          color: #fff;
          opacity: 0.8;
        }
        datachild p {
          color: #fff;
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
