import React from "react";
import { css } from "@emotion/css";
import IJN from "components/theme/TheIceJI";

export default function Footer() {
  const footerBar = css`
    height: 35px;
    background-color: #222222;
    padding: 10px 0 0 0;
    width: 100%;
    bottom: 0;
    z-index: 1;
  `;
  const footerItem = css`
    font-size: 12px;
    color: #777;
    text-decoration: none;
    display: inline;
    transition-duration: 500ms;
    transition-timing-function: ease;
    & a {
      font-size: 16px;
      color: #777;
      padding-left: 20px;
      transition-duration: 3000ms;
      transition-timing-function: ease;
    }
    &:hover, a:hover {
        color: #fff;
        transition-duration: 500ms;
        transition-timing-function: ease;
      }
    }
  `;
  return (
    <>
      <footer className={footerBar}>
        <IJN.Section>
          <IJN.Container lg Xb>
            <IJN.Flex>
              <span className={footerItem}>
                Copyright ©2020 Designed by Jirayu Ninlapun . All rights
                reserved
              </span>
            </IJN.Flex>
            <IJN.Flex>
              <div className={footerItem}>
                <div
                  className="float-right"
                >
                  <a href="https://www.facebook.com/jirayunlp">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.pinterest.com/nlp_jirayu/">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCkuktA0dNvT9Te3-V0nl9zg">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="https://www.behance.net/ice147776c71">
                    <i className="fa fa-behance"></i>
                  </a>
                  <a href="https://www.instagram.com/nlp_jirayu/">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://soundcloud.com/theiceji-official">
                    <i className="fa fa-soundcloud"></i>
                  </a>
                  <a href="https://medium.com/@nlp_jirayu">
                    <i className="fa fa-medium"></i>
                  </a>
                  <a href="https://m.me/jirayunlp">
                    <i className="fa fa-comment"></i>
                  </a>
                  <a href="mailto:Jirayu.Ninl@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </IJN.Flex>
          </IJN.Container>
        </IJN.Section>
      </footer>
    </>
  );
}
