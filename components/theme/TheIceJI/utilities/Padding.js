import { css } from '@emotion/react'

// PADDING Properties
const Padding = (props) =>
  css(
    {
      paddingTop: props.pt ? props.pt : props.pta ? "auto" : "",
      paddingBottom: props.pb ? props.pb : props.pba ? "auto" : "",
      paddingLeft: props.pl ? props.pl : props.pla ? "auto" : "",
      paddingRight: props.pr ? props.pr : props.pra ? "auto" : "",
    },
    `padding: ${
      props.p
        ? `${props.p[0]}px ${props.p[1]}px ${props.p[2]}px ${props.p[3]}px` || props.p
        : props.pA
        ? props.pA
        : props.pY
        ? `${props.pY}px 0`
        : props.pX
        ? `0 ${props.pX}px`
        : props.pYa
        ? "auto 0"
        : props.pXa
        ? "0 auto"
        : props.pa
        ? "auto"
        : props.p0
        ? "0"
        : ""
    }`
  );

export default Padding;