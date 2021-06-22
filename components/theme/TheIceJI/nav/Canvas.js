import styled from "@emotion/styled";
import Color from "../color";
import { motion } from "framer-motion"

const Canvas = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #000;
  /* background-color: ${Color.Primary}; */
  position: fixed;
  z-index: 400;
  overflow: hidden;
`;

export default Canvas;