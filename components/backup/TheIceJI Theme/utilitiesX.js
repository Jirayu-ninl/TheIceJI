import { css } from "@emotion/core";

// Breakpoint Properties
const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

// MARGIN Properties
export const Margin = (props) =>
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

// PADDING Properties
export const Padding = (props) =>
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

// TOP-RIGHT-BOTTOM-LEFT Properties

export const Location = (props) =>
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

// SIZE Properties

export const Size = (props) =>
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

// POSITION Properties

export const Position = (props) =>
  css({
    position: props.posR
      ? "relative"
      : props.posA
      ? "absolute"
      : props.posF
      ? "fixed"
      : props.posS
      ? "sticky"
      : "",
  });

// DISPLAY Properties

export const Display = (props) =>
  css({
    display: props.dB ? "block" : props.dI ? "inline" : props.dF ? "flex" : "",
  });

export const Flex = (props) =>
  css({
    flexDirection: props.X
      ? "row"
      : props.Xr
      ? "row-reverse"
      : props.Y
      ? "column"
      : props.Yr
      ? "column-reverse"
      : "",
    justifyContent: props.Jcs
      ? "flex-start"
      : props.Jcc
      ? "center"
      : props.Jce
      ? "flex-end"
      : props.Jcb
      ? "space-between"
      : props.Jca
      ? "space-Xs"
      : props.Js
      ? "flex-start"
      : props.Jc
      ? "center"
      : props.Je
      ? "flex-end"
      : props.Jb
      ? "space-between"
      : props.Ja
      ? "space-Xs"
      : "",
    alignContent: props.Acs
      ? "flex-start"
      : props.Acc
      ? "center"
      : props.Ace
      ? "flex-end"
      : props.Acb
      ? "space-between"
      : props.Aca
      ? "space-Xs"
      : props.As
      ? "flex-start"
      : props.Ac
      ? "center"
      : props.Ae
      ? "flex-end"
      : props.Ab
      ? "space-between"
      : props.Aa
      ? "space-Xs"
      : "",
    justifyItems: props.Jis
      ? "flex-start"
      : props.Jic
      ? "center"
      : props.Jie
      ? "flex-end"
      : props.Jib
      ? "space-between"
      : props.Jia
      ? "space-Xs"
      : props.Js
      ? "flex-start"
      : props.Jc
      ? "center"
      : props.Je
      ? "flex-end"
      : props.Jb
      ? "space-between"
      : props.Ja
      ? "space-Xs"
      : "",
    alignItems: props.Ais
      ? "flex-start"
      : props.Aic
      ? "center"
      : props.Aie
      ? "flex-end"
      : props.Aib
      ? "space-between"
      : props.Aia
      ? "space-Xs"
      : props.As
      ? "flex-start"
      : props.Ac
      ? "center"
      : props.Ae
      ? "flex-end"
      : props.Ab
      ? "space-between"
      : props.Aa
      ? "space-Xs"
      : "",
  });

// Z-INDEX

export const zIndex = (props) =>
  css({
    zIndex: props.z ? props.z : "",
  });

const Utilities = {
  Margin,
  Padding,
  Location,
  Size,
  Position,
  zIndex,
  Display,
  Flex,
};

// export { mq, Margin, Padding, Location, Size, Position, zIndex, Display, Flex };
export default Utilities;
