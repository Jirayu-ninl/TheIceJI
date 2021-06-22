import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

const Brand = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  height: 100%;
  display: flex;
  align-items: center;
`;

export default Brand;