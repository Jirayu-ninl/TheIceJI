import styled from "@emotion/styled";
import Utilities from "../utilities";
import { motion } from "framer-motion"

export const Section = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  width: 100%;
  ${(props) => ({
    height: props.H
      ? props.H
      : props.H100
      ? "100%"
      : props.H100vh
      ? "100vh"
      : "",
    justifyContent: props.Ys ? "flex-start" : props.Ye ? "flex-end" : "center",
    justifyItems: props.Ys ? "flex-start" : props.Ye ? "flex-end" : "center",
  })};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Container = styled(motion.div)`
  ${Utilities.Margin};
  ${Utilities.Padding};
  ${Utilities.Location};
  ${(props) => ({
    width: props.fluid
      ? "1750px"
      : props.xl
      ? "1440px"
      : props.lg
      ? "1040px"
      : props.md
      ? "768px"
      : ``,
    height: props.H
      ? props.H
      : props.H100
      ? "100%"
      : props.H100vh
      ? "100vh"
      : "",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: props.Xs
      ? "flex-start"
      : props.Xc
      ? "center"
      : props.Xe
      ? "flex-end"
      : props.Xb
      ? "space-between"
      : props.Xa
      ? "space-Xs"
      : "center",
    justifyItems: props.Xs
      ? "flex-start"
      : props.Xc
      ? "center"
      : props.Xe
      ? "flex-end"
      : props.Xb
      ? "space-between"
      : props.Xa
      ? "space-Xs"
      : "center",
    position: props.posR ? "relative" : "",
  })};
`;