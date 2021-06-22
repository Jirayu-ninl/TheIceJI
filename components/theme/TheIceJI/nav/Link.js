import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

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

export default Link;