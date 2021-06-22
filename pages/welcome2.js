import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { motion, animate } from "framer-motion";
import Loading from "components/loading";

// Global State
import { useGlobalDispatchContext } from "components/context/globalContext";

export default function index() {
  const dispatch = useGlobalDispatchContext();
  const [Step, setStep] = useState(0);
  const [InputName, setInputName] = useState(`Adam`);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (IsLoading == true) {
      window.localStorage.getItem("getName") == null ? FirstTime() : setStep(5),
        setInputName(window.localStorage.getItem("getName"));
    } else {
      null;
    }
  }, []);

  const LoadWebsite = () => {
    setTimeout(() => {
      setIsLoading(true);
      console.log(IsLoading);
    }, 3000);
    return <Loading />;
  };

  const FirstTime = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 2000);
    setTimeout(() => {
      setStep(3);
    }, 4000);
  };

  const registerUser = (event) => {
    event.preventDefault();
    setStep(4);
    window.localStorage.setItem("getName", InputName);
  };
  const onChangeName = (e) => {
    setInputName(`${e.target.value}`);
  };

  // const SendName = (InputName) => {
  //   dispatch({ type: "USER_NAME", userName: "InputName" });
  // };

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
  const TextContainer = css`
    width: 100vw;
    overflow: hidden;
  `;
  const TextHi = css`
    /* position: relative; */
    color: #fff;
    font-weight: 300;
    left: 50%;
    transform: translateX(-50%);
  `;
  const TextWelcome = css`
    /* position: relative; */
    color: #fff;
    font-size: 60px;
    font-weight: 300;
    left: 50%;
    transform: translateX(-50%);
  `;
  const NameInput = css`
    display: flex;
    & > Input {
      background-color: rgba(0, 0, 0, 0);
      font-size: 60px;
      text-align: left;
      font-weight: 300;
      color: #fff;
      border: none;
      border-bottom: 2px solid rgba(255, 255, 255, 1);
      @media (max-width: 750px) {
        font-size: 30px;
      }
    }
    & button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      margin-left: -50px;
      & > svg {
        @media (max-width: 750px) {
          height: 20px;
        }
      }
    }
  `;

  const NextButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0.3;
    transition-duration: 500ms;
    &:hover {
      opacity: 1;
      transition-duration: 250ms;
    }
    & > h3 {
      color: #fff;
      font-weight: 300;
      font-size: 30px;
      margin-bottom: -1px;
      padding-right: 10px;
    }
    & svg {
      height: 30px;
    }
  `;
  const NextLink = css`
    text-decoration: none;
  `;

  const CheckName = css`
    /* position: relative; */
    justify-content: center;
    align-items: center;
    display: flex;
    & > h3 {
      font-weight: 300;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.3);
      margin-bottom: -5px;
      padding-right: 30px;
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  const WelcomeText = () => {
    if (Step < 3)
      return (
        <div className={TextContainer}>
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            className={TextHi}
          >
            {Step == 1 ? `Hi . . .` : Step == 2 ? `What's your name` : null}
          </motion.h1>
        </div>
      );
    else if (Step == 4)
      return (
        <>
          <div className={TextContainer}>
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{
                y: "0",
                opacity: 1,
              }}
              transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
              className={TextWelcome}
            >
              Welcome, {InputName}
            </motion.h1>
          </div>
          <a className={NextLink} href="/gui">
            <div className={NextButton}>
              <motion.h3
                initial={{ y: "120%" }}
                animate={{
                  y: "0",
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
              >
                Next
              </motion.h3>
              <motion.div
                initial={{ x: "-50%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.458"
                  height="30.911"
                  viewBox="0 0 49.458 30.911"
                >
                  <path
                    id="iconmonstr-arrow-right-thin"
                    d="M45.095,20.486,29.584,33.335l1.327,1.576,18.547-15.5L30.911,4,29.582,5.574,45.1,18.425H0v2.061H45.095Z"
                    transform="translate(0 -4)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>
          </a>
        </>
      );
    else if (Step == 5) return null;
    else return null;
  };

  return (
    <>
      <div className={container}>
        <div className={inner}>
          <LoadWebsite />
          <WelcomeText />
          {Step == 3 && (
            <form className={NameInput} onSubmit={registerUser}>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                id="name"
                type="text"
                placeholder="What's your name"
                required
                onChange={onChangeName}
              />
              <motion.button
                initial={{ x: "-20%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.458"
                  height="30.911"
                  viewBox="0 0 49.458 30.911"
                >
                  <path
                    id="iconmonstr-arrow-right-thin"
                    d="M45.095,20.486,29.584,33.335l1.327,1.576,18.547-15.5L30.911,4,29.582,5.574,45.1,18.425H0v2.061H45.095Z"
                    transform="translate(0 -4)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
              </motion.button>
            </form>
          )}
          {Step == 5 && (
            <>
              <div className={TextContainer}>
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: "0",
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className={TextWelcome}
                >
                  Welcome back, {InputName}
                </motion.h1>
              </div>
              <div className={CheckName}>
                <motion.h3
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{
                    y: "0",
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                  onClick={() => setStep(3)}
                >
                  It's not you?
                </motion.h3>
                <a className={NextLink} href="/gui">
                  <div className={NextButton}>
                    <motion.h3
                      initial={{ y: "120%" }}
                      animate={{
                        y: "0",
                      }}
                      transition={{
                        delay: 1,
                        duration: 0.5,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      }}
                    >
                      Next
                    </motion.h3>
                    <motion.div
                      initial={{ x: "-50%", opacity: 0 }}
                      animate={{
                        x: "0",
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.5,
                        duration: 0.5,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="49.458"
                        height="30.911"
                        viewBox="0 0 49.458 30.911"
                      >
                        <path
                          id="iconmonstr-arrow-right-thin"
                          d="M45.095,20.486,29.584,33.335l1.327,1.576,18.547-15.5L30.911,4,29.582,5.574,45.1,18.425H0v2.061H45.095Z"
                          transform="translate(0 -4)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
