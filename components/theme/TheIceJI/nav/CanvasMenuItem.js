import styled from "@emotion/styled";
import { motion } from "framer-motion"

const CanvasMenuItem = styled(motion.a)`
  display: flex;
  color: #fff;
  opacity: 0.4;
  transition-duration: 1500ms;
  text-decoration: none;
  & h1:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: calc(100% - 20px);
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: 0.5s transform;
    z-index: 50;
  }
  &:hover {
    opacity: 1;
    transition-duration: 250ms;
    & h1 {
      color: #fff;
      letter-spacing: 5px;
      transition-duration: 250ms;
      transform: translateX(10%);
    }
    & h1:before {
      transform: scaleX(1);
      transform-origin: left;
      transition: 0.5s transform;
    }
    & h6 {
      transition-duration: 250ms;
      opacity: 1;
      color: #fff;
    }
  }
`;

export default CanvasMenuItem;