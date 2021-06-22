import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

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

export default Icon;