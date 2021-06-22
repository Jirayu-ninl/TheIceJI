import React from "react";
import { css } from "@emotion/css";
import { motion, AnimatePresence } from "framer-motion";

export default function about({ toggleAbout, setToggleAbout }) {
  const Panel = css`
    position: absolute;
    left: 32%;
    top: 32%;
    /* top: 0; */
    transform: translate(-50%, -50%);
    width: 677px;
    height: 363px;
    background: url(/gui/about.png);
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.27);
    /* background-color: #000; */
  `;

  return (
    <>
      <AnimatePresence>
        {toggleAbout && (
          <motion.div
            initial={{ y: "80%", opacity: 0 }}
            exit={{ y: "80%", opacity: 0 }}
            animate={{
              y: toggleAbout ? 0 : "80%",
              opacity: toggleAbout ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className={Panel}
            onClick={() => setToggleAbout(false)}
          >
            {/* <h3>Panel</h3> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
