import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
// import Link from "next/link";
import { Nav } from "components/theme/TheIceJI";
import { cx, css } from "emotion";
// GSAP
import { TweenMax, Power3 } from "gsap";
export default function IJNnav({ onCursor }) {
  let Logo = useRef(null);
  let Item01 = useRef(null);
  let Item02 = useRef(null);
  let Item03 = useRef(null);
  let Item04 = useRef(null);
  let Item05 = useRef(null);
  let Menu = useRef(null);

  let CanvasBG = useRef(null);
  let CanvasBGb = useRef(null);
  let CanvasFG = useRef(null);
  let AnimateCanvasTextBG = useRef(null);
  let MenuItem = useRef(null);

  const [ScrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    TweenMax.from(Logo, 1, {
      y: -70,
      ease: Power3.easeInOut,
    });
    TweenMax.from(Menu, 1.5, {
      y: -70,
      ease: Power3.easeInOut,
    });

    window.addEventListener("scroll", handle);

    let LastScrollTop = 0;
    function handle(e) {
      let Offset = window.pageYOffset || document.documentElement.scrollTop;
      if (Offset > 50) {
        if (LastScrollTop > Offset) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      } else {
        setScrollNav(false);
      }
      LastScrollTop = Offset;
      console.log(Offset + ", " + LastScrollTop);
    }

    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Off-Canvas Active

  const offcanvasActive = () => {
    TweenMax.to(CanvasBG, 0.7, {
      height: "100%",
      width: "100%",
      borderRadius: "0",
      ease: Power3.easeInOut,
    });
    TweenMax.to(CanvasBGb, 1, {
      height: "100%",
      width: "100%",
      borderRadius: "0",
      ease: Power3.easeInOut,
    });
    TweenMax.from(CanvasFG, 1.5, {
      delay: 0.5,
      width: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(AnimateCanvasTextBG, 3, {
      delay: 0.5,
      strokeDasharray: 0,
      strokeOpacity: 0,
      fill: "rgba(255, 255, 255, 0.05)",
      ease: Power3.easeInOut,
    });
    TweenMax.to(MenuItem, 0, {
      delay: 1,
      visibility: "visible",
      ease: Power3.easeInOut,
    });
    TweenMax.staggerFrom(
      [Item01, Item02, Item03, Item04, Item05],
      0.5,
      {
        delay: 1,
        y: 2000,
        skewY: 50,
        ease: Power3.easeInOut,
      },
      0.2
    );
  };

  // Off-Canvas Inactive

  const offcanvasInactive = () => {
    TweenMax.to(CanvasBG, 1, {
      height: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(CanvasBGb, 0.9, {
      height: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(AnimateCanvasTextBG, 1, {
      delay: 0,
      strokeDasharray: 200,
      strokeOpacity: 0.4,
      fill: "rgba(255, 255, 255, 0)",
      ease: Power3.easeInOut,
    });
  };

  // Link - Prefetch and Push

  const handleLink = (url) => {
    Router.prefetch(url);
    TweenMax.to(CanvasBG, 1, {
      height: 0,
      ease: Power3.easeInOut,
    });
    setTimeout(() => {
      Router.push(url);
    }, 1000);
  };

  // CSS Style

  const IJNsvg = css`
    transition-duration: 750ms;
    &:hover {
      transition-duration: 200ms;
      transform: scale(1.5);
    }
  `;

  const fixedMenu = css`
    position: fixed;
    top: -64px;
    right: -64px;
    background-color: #2a2a2a;
    fill: #fff;
    height: 128px;
    width: 128px;
    border-radius: 50%;
    transform: translate(50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 400;
    transition-duration: 150ms;
    padding: 48px 48px 0 0;
    &:hover {
      top: -64px;
      right: -64px;
      transform: scale(1.5);
      transition-duration: 150ms;
    }
  `;

  const fixedMenuActive = css`
    top: 0;
    right: 0;
    transition-duration: 500ms;
  `;

  const CanvasLayer = css`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CanvasMenu = css`
    height: 100%;
    left: 48%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5% 0;
  `;

  const CanvasLayerFG = css`
    height: 100%;
    width: 50%;
    position: absolute;
    background-color: #0e0e0e;
  `;

  const CanvasTextBG = css`
    fill: rgba(0, 0, 0, 0);
    stroke-opacity: 0.4;
    stroke: #fff;
    stroke-dasharray: 200;
    gap: 20;
  `;

  return (
    <>
      <Nav.Bar  transparent pX={28} H={96} light>
        <Nav.Brand
          onMouseEnter={() => onCursor("logo")}
          onMouseLeave={onCursor}
        >
          <img
            ref={(e) => (Logo = e)}
            src="/logo_white.svg"
            height="40"
            alt="TheIceJI logo"
            href="#"
          />
        </Nav.Brand>
        <Nav.Icon
        onMouseEnter={() => onCursor("logo")}
        onMouseLeave={onCursor}
        >
          <svg
            ref={(e) => (Menu = e)}
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className={IJNsvg}
            onClick={offcanvasActive}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
          </svg>
        </Nav.Icon>
      </Nav.Bar>
      <nav
        className={ScrollNav ? cx(fixedMenu, fixedMenuActive) : fixedMenu}
        onClick={offcanvasActive}
      >
        <svg
          ref={(e) => (Menu = e)}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className={IJNsvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
        </svg>
      </nav>
      <Nav.Canvas ref={(e) => (CanvasBG = e)} style={{ height: 0 }}>
        <div className={CanvasLayerFG} ref={(e) => (CanvasFG = e)}></div>
        <Nav.Bar transparent pX={28} H={96} light>
          <Nav.Brand>
            <img
              ref={(e) => (Logo = e)}
              src="/logo_white.svg"
              height="40"
              alt="TheIceJI logo"
              href="#"
            />
          </Nav.Brand>
          <Nav.Icon>
            <svg
              ref={(e) => (Menu = e)}
              width="17.678"
              height="17.678"
              viewBox="0 0 17.678 17.678"
              className={IJNsvg}
              onClick={offcanvasInactive}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-1871.161 -37.661)">
                <rect
                  width="22"
                  height="3"
                  rx="1.5"
                  transform="translate(1871.161 53.218) rotate(-45)"
                  fill="#fff"
                />
                <rect
                  width="22"
                  height="3"
                  rx="1.5"
                  transform="translate(1873.282 37.661) rotate(45)"
                  fill="#fff"
                />
              </g>
            </svg>
          </Nav.Icon>
        </Nav.Bar>
        <div className={CanvasLayer}>
          <svg
            className={CanvasTextBG}
            ref={(e) => (AnimateCanvasTextBG = e)}
            width="1314.413"
            height="347.231"
            viewBox="0 0 1314.413 347.231"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="translate(-31.168 343.822)"
              d="M401.775-339.926V0H333.6V-237.169L246.422,0H187.008L99.835-236.2V0H31.168V-339.926h83.277L217.689-84.251l101.3-255.675Zm131,50.648v89.121h121.75v52.6H532.778v92.53h136.36V0H464.111V-343.822H669.138v54.544ZM1011.012,0H942.345L788.453-233.76V0H719.786V-343.822h68.667L942.345-108.114V-343.822h68.667ZM1139.58-343.822V-142.2q0,40.421,17.776,60.632t51.378,20.211q33.116,0,50.892-20.211T1277.4-142.2V-343.822h68.18V-142.2q0,47.726-17.776,80.6t-49.187,48.944q-31.412,16.071-71.345,16.071-61.849,0-98.861-37.012T1071.4-142.2V-343.822Z"
            />
          </svg>
        </div>
        <div
          className={CanvasMenu}
          ref={(e) => (MenuItem = e)}
          style={{ visibility: "hidden" }}
        >
          <Nav.CanvasMenuItem
            ref={(e) => (Item01 = e)}
            onClick={() => handleLink("/home")}
          >
            <Nav.CanvasNumber>01</Nav.CanvasNumber>
            <Nav.CanvasLink>HOME</Nav.CanvasLink>
          </Nav.CanvasMenuItem>
          <Nav.CanvasMenuItem
            ref={(e) => (Item02 = e)}
            onClick={() => handleLink("/about")}
          >
            <Nav.CanvasNumber>02</Nav.CanvasNumber>
            <Nav.CanvasLink>ABOUT</Nav.CanvasLink>
          </Nav.CanvasMenuItem>
          <Nav.CanvasMenuItem
            ref={(e) => (Item03 = e)}
            onClick={() => handleLink("/services")}
          >
            <Nav.CanvasNumber>03</Nav.CanvasNumber>
            <Nav.CanvasLink>SERVICES</Nav.CanvasLink>
          </Nav.CanvasMenuItem>
          <Nav.CanvasMenuItem
            ref={(e) => (Item04 = e)}
            onClick={() => handleLink("/portfolio")}
          >
            <Nav.CanvasNumber>04</Nav.CanvasNumber>
            <Nav.CanvasLink>PORTFOLIO</Nav.CanvasLink>
          </Nav.CanvasMenuItem>

          <Nav.CanvasMenuItem
            ref={(e) => (Item05 = e)}
            onClick={() => handleLink("/blog")}
          >
            <Nav.CanvasNumber>05</Nav.CanvasNumber>
            <Nav.CanvasLink>BLOG</Nav.CanvasLink>
          </Nav.CanvasMenuItem>
        </div>
        <div
          style={{ backgroundColor: "#000", cursorPointer: "none", zIndex: 1 }}
          ref={(e) => (CanvasBGb = e)}
        />
      </Nav.Canvas>
    </>
  );
}
