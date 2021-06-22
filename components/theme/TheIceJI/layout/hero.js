import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

// Hero Section - Container

export const Hero = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${(props) => ({ height: props.H ? props.H : "100vh" })};
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Layer = styled(motion.div)`
  position: absolute;
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Size};
  ${Utilities.Display};
  ${Utilities.Flex};
`;