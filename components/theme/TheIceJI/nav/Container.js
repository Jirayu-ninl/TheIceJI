import styled from "@emotion/styled";
import { motion } from "framer-motion"

const Container = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 500;
`;

export default Container;