import { css } from "@emotion/react";

// MARGIN Properties
const Margin = (props) =>
  css(
    {
      marginTop: props.mt ? props.mt : props.mta ? "auto" : "",
      marginBottom: props.mb ? props.mb : props.mba ? "auto" : "",
      marginLeft: props.ml ? props.ml : props.mla ? "auto" : "",
      marginRight: props.mr ? props.mr : props.mra ? "auto" : "",
    },
    `margin: ${
      props.m
        ? `${props.m[0]}px ${props.m[1]}px ${props.m[2]}px ${props.m[3]}px`
        : props.mA
        ? props.mA
        : props.mY
        ? `${props.mY}px 0 ${props.mY}px 0`
        : props.mX
        ? `0 ${props.mX}px 0 ${props.mX}px`
        : props.mYa
        ? "auto 0"
        : props.mXa
        ? "0 auto"
        : props.ma
        ? "auto"
        : props.m0
        ? "0"
        : ""
    }`
  );

export default Margin;