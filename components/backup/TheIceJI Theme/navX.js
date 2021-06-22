import styled from "@emotion/styled";
import Utilities from "./utilities";
import Color from "./color";
import { motion } from "framer-motion"

const Container = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 500;
`;

const Bar = styled(motion.nav)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.zIndex};
  ${(props) => ({
    height: props.H ? props.H + "px" : "",
    marginBottom: props.transparent ? "-" + props.H + "px" : "",
    color: props.color
      ? props.color
      : props.light
      ? "#fff"
      : props.dark
      ? "#000"
      : "",
    fill: props.color
      ? props.color
      : props.light
      ? "#fff"
      : props.dark
      ? "#000"
      : "",
  })};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  z-index: 600;
  & path {
    color: inherit;
    fill: inherit;
  }
`;

const Brand = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  height: 100%;
  display: flex;
  align-items: center;
`;

const Menu = styled(motion.ul)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${(props) => ({
    justifyContent: props.left
      ? "flex-start"
      : props.center
      ? "center"
      : props.right
      ? "flex-end"
      : "",
    marginLeft: props.left ? "auto" : "",
    margin: props.center ? "0 auto" : "",
    marginRight: props.right ? "auto" : "",
  })};
  display: flex;
  list-style: none;
  & > li > a {
    margin: ${(props) => (props.space ? "0 " + props.space / 2 + "px" : "")};
    opacity: ${(props) => (props.h_o ? props.h_o : "1")};
  }
`;

const Item = styled(motion.li)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  color: inherit;
`;

const Link = styled(motion.a)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  opacity: ${(props) => (props.o ? props.o : "0.8")};
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
    font-weight: 800;
  }
  &:active {
    font-weight: 800;
  }
`;

const Icon = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  opacity: ${(props) => (props.o ? props.o : "0.8")};
  height: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  &:hover {
    opacity: ${(props) => (props.h_o ? props.h_o : "1")};
  }
`;

const Canvas = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${Color.Primary};
  position: fixed;
  z-index: 400;
  overflow: hidden;
`;

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
const CanvasNumber = styled(motion.h6)`
  font-family: poppins;
  font-weight: 800;
  color: #fff;
  opacity: 0.5;
`;
const CanvasLink = styled(motion.h1)`
  font-family: poppins;
  font-size: 77px;
  font-weight: 700;
  margin-left: 38px;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1px #fff;
  transition-duration: 500ms;
`;

const Nav = {
  Container,
  Bar,
  Brand,
  Menu,
  Item,
  Link,
  Icon,
  Canvas,
  CanvasMenuItem,
  CanvasLink,
  CanvasNumber,
};

export {
  Container,
  Bar,
  Brand,
  Menu,
  Item,
  Link,
  Icon,
  Canvas,
  CanvasMenuItem,
  CanvasLink,
  CanvasNumber,
};
export default Nav;
