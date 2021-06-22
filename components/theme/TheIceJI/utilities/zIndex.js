import { css } from "@emotion/react";

// Z-INDEX
const zIndex = (props) =>
  css({
    zIndex: props.z ? props.z : "",
  });

export default zIndex;