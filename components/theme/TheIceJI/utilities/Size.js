import { css } from "@emotion/react";

// SIZE Properties
const Size = (props) =>
  css({
    height: props.H
      ? props.H
      : props.H100
      ? "100%"
      : props.H100vh
      ? "100vh"
      : props.fluid
      ? "100%"
      : "",
    width: props.W
      ? props.W
      : props.W100
      ? "100%"
      : props.W100vh
      ? "100vw"
      : props.fluid
      ? "100%"
      : "",
  });
  
export default Size;