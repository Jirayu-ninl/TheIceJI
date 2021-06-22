import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion";

const Flex = styled(motion.div)`
  display: flex;
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Position};
  ${Utilities.Size};
  ${Utilities.Flex};
  ${Utilities.zIndex};
`;

export default Flex;
