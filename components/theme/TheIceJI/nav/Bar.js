import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

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

export default Bar;