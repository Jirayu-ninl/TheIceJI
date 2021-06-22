import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

const Item = styled(motion.li)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  color: inherit;
`;

export default Item;