import React from "react";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/css";

// Components
import { Nav } from "components/theme/TheIceJI";
import { useGlobalDispatchContext } from "components/context/globalContext";
import navRoutes from "./route";

export default function canvas({
  onCursor,
  toggleMenu,
  setToggleMenu,
  setComponentState,
}) {
  const dispatch = useGlobalDispatchContext();

  // Function
  const handleLink = (url) => {
    // Router.prefetch(url);
    setToggleMenu(false);
    dispatch({ type: "CURSOR_TYPE", cursorType: false });
    setTimeout(() => {
      Router.push(url);
    }, 1000);
  };
  const handleState = (state) => {
    setToggleMenu(false);
    dispatch({ type: "CURSOR_TYPE", cursorType: false });
    setTimeout(() => {
      setComponentState(state)
    }, 1000);
  };

  // Motion
  const parent = {
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0 } },
  };

  const titleSlideUp = {
    initial: { y: 1000 },
    animate: { y: 0 },
  };

  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

  // CSS
  const IJNsvg = css`
    transition-duration: 750ms;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
    }
  `;

  const arrow = css`
    width: 30px;
    height: 30px;
  `;

  const CanvasLayer = css`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CanvasMenu = css`
    height: 100%;
    left: 15%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5% 0;
  `;

  const CanvasTextBG = css`
    fill: rgba(0, 0, 0, 0);
    stroke-opacity: 0.4;
    stroke: #fff;
    /* stroke-dasharray: 200; */
    gap: 20;
  `;

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav.Canvas
            initial={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            animate={{ y: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <div className={CanvasLayer}>
              <motion.svg
                className={CanvasTextBG}
                animate={{ strokeDasharray: [600, 200, 600] }}
                transition={{
                  loop: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
                width="1314.413"
                height="347.231"
                viewBox="0 0 1314.413 347.231"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(-31.168 343.822)"
                  d="M401.775-339.926V0H333.6V-237.169L246.422,0H187.008L99.835-236.2V0H31.168V-339.926h83.277L217.689-84.251l101.3-255.675Zm131,50.648v89.121h121.75v52.6H532.778v92.53h136.36V0H464.111V-343.822H669.138v54.544ZM1011.012,0H942.345L788.453-233.76V0H719.786V-343.822h68.667L942.345-108.114V-343.822h68.667ZM1139.58-343.822V-142.2q0,40.421,17.776,60.632t51.378,20.211q33.116,0,50.892-20.211T1277.4-142.2V-343.822h68.18V-142.2q0,47.726-17.776,80.6t-49.187,48.944q-31.412,16.071-71.345,16.071-61.849,0-98.861-37.012T1071.4-142.2V-343.822Z"
                />
              </motion.svg>
            </div>
            <motion.div
              className={CanvasMenu}
              variants={parent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Nav.CanvasMenuItem
                onClick={() => handleState(1)}
                onMouseEnter={() => onCursor("go")}
                onMouseLeave={onCursor}
                variants={titleSlideUp}
                transition={transition}
              >
                <Nav.CanvasNumber>01</Nav.CanvasNumber>
                <Nav.CanvasLink>Home</Nav.CanvasLink>
              </Nav.CanvasMenuItem>
              <Nav.CanvasMenuItem
                onClick={() => handleState(2)}
                onMouseEnter={() => onCursor("go")}
                onMouseLeave={onCursor}
                variants={titleSlideUp}
                transition={transition}
              >
                <Nav.CanvasNumber>02</Nav.CanvasNumber>
                <Nav.CanvasLink>About</Nav.CanvasLink>
              </Nav.CanvasMenuItem>
              <Nav.CanvasMenuItem
                onClick={() => handleState(3)}
                onMouseEnter={() => onCursor("go")}
                onMouseLeave={onCursor}
                variants={titleSlideUp}
                transition={transition}
              >
                <Nav.CanvasNumber>03</Nav.CanvasNumber>
                <Nav.CanvasLink>Services</Nav.CanvasLink>
              </Nav.CanvasMenuItem>
              {navRoutes.map((route) => (
                <Nav.CanvasMenuItem
                  key={route.id}
                  onClick={() => handleLink(`${route.path}`)}
                  onMouseEnter={() => onCursor("go")}
                  onMouseLeave={onCursor}
                  variants={titleSlideUp}
                  transition={transition}
                >
                  <Nav.CanvasNumber>{route.number}</Nav.CanvasNumber>
                  <Nav.CanvasLink>{route.title}</Nav.CanvasLink>
                </Nav.CanvasMenuItem>
              ))}
            </motion.div>
            <div
              style={{
                backgroundColor: "#000",
                cursorPointer: "none",
                zIndex: 1,
              }}
            />
          </Nav.Canvas>
        )}
      </AnimatePresence>
    </>
  );
}
