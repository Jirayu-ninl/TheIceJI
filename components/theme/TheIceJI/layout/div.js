import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion";

const Div = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${Utilities.Position};
  ${Utilities.Size};
  ${Utilities.Display};
`;

export default Div;