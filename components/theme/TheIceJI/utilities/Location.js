import { css } from "@emotion/react";

// TOP-RIGHT-BOTTOM-LEFT Properties

const Location = (props) =>
  css({
    top: props.t
      ? props.t
      : props.t0
      ? "0"
      : props.tl0
      ? "0"
      : props.tr0
      ? "0"
      : props.tl
      ? props.tl
      : props.tr
      ? props.tr
      : "",
    bottom: props.b
      ? props.b
      : props.b0
      ? "0"
      : props.bl0
      ? "0"
      : props.br0
      ? "0"
      : props.bl
      ? props.bl
      : props.br
      ? props.br
      : "",
    left: props.l
      ? props.l
      : props.l0
      ? "0"
      : props.tl0
      ? "0"
      : props.bl0
      ? "0"
      : props.tl
      ? props.tl
      : props.bl
      ? props.bl
      : "",
    right: props.r
      ? props.r
      : props.r0
      ? "0"
      : props.tr0
      ? "0"
      : props.br0
      ? "0"
      : props.tr
      ? props.tr
      : props.br
      ? props.br
      : "",
  });

export default Location;
