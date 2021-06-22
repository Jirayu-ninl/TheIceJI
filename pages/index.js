import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import { motion, animate } from "framer-motion";

export default function index() {
  const router = useRouter();

  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 3,
        ease: [0.33, 1, 0.68, 1],
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [from, to]);

    return <h2 ref={nodeRef} />;
  }

  useEffect(() => {
    setTimeout(() => {router.push("/welcome")}, 3000);
  }, []);

  const container = css`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #010101;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 60;
  `;
  const inner = css``;
  const logoContainer = css`
    width: 165px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;
  const logoFG = css`
    position: absolute;
    & > svg {
      stroke: #fff;
      gap: 20;
    }
  `;
  const logoBG = css`
    & > svg {
      stroke: #fff;
      stroke-opacity: 0.5;
    }
  `;
  const loading = css`
    width: 224px;
    height: 10px;
    border: solid 1px #fff;
    border-radius: 5px;
    margin: 20px 0 10px 0;
  `;
  const loadingBar = css`
    height: 4px;
    background-color: #fff;
    margin: 2px;
    border-radius: 2px;
  `;
  const percent = css`
    font-family: poppins;
    font-size: 37px;
    font-weight: 600;
    color: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  `;
  const text = css`
    font-family: poppins;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    opacity: 0.8;
  `;
  return (
    <>
      <div className={container}>
        <div className={inner}>
          <div className={logoContainer}>
            <motion.div
              className={logoFG}
              animate={{ strokeDasharray: 100 }}
              initial={{ strokeDasharray: 50 }}
              transition={{
                duration: 3,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <svg>
                <path
                  d="M83.9,78.6L73.4,96.8l18.1,31.3l-8.9,15.5L54.2,94.3L62.4,80l0.8-1.4l0.4-0.6l10.3-17.8h35.8l24.1-41.8H98
	l4.2-7.3L108.6,0h56.6L120,78.6H83.9z M94.8,12.1L25,12.2l0.2,4.2l66.9,0.4L50.9,88.6L36.8,63.9l7.7-13.4l6.9,12.7l19.2-33.5
	L25.7,30l-4.2,7.4L0,0h101.7L94.8,12.1z"
                ></path>
              </svg>
            </motion.div>
            <motion.div
              className={logoBG}
              animate={{ fill: "rgba(255, 255, 255, 1)" }}
              initial={{ fill: "rgba(255, 255, 255, 0)" }}
              transition={{
                // delay: 6,
                duration: 3,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <svg>
                <path
                  d="M83.9,78.6L73.4,96.8l18.1,31.3l-8.9,15.5L54.2,94.3L62.4,80l0.8-1.4l0.4-0.6l10.3-17.8h35.8l24.1-41.8H98
	l4.2-7.3L108.6,0h56.6L120,78.6H83.9z M94.8,12.1L25,12.2l0.2,4.2l66.9,0.4L50.9,88.6L36.8,63.9l7.7-13.4l6.9,12.7l19.2-33.5
	L25.7,30l-4.2,7.4L0,0h101.7L94.8,12.1z"
                ></path>
              </svg>
            </motion.div>
          </div>
          <div className={percent}>
            {/* <h2>0</h2> */}
            <Counter from={0} to={100} />
            <h2>%</h2>
          </div>
          <div className={loading}>
            <motion.div
              className={loadingBar}
              animate={{ width: 218 }}
              initial={{ width: 0 }}
              transition={{
                duration: 3,
                ease: [0.33, 1, 0.68, 1],
              }}
            ></motion.div>
          </div>
          <p className={text}>Loading your Experience.</p>
        </div>
      </div>
    </>
  );
}
