import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

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

export default Menu;