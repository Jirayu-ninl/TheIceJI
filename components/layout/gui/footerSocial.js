import React from "react";
import { css } from "@emotion/css";

export default function footerSocial(props) {

  // Right - Social Media
  const FooterSocial = css`
    position: absolute;
    left: 20px;
    bottom: 10px;
    display: flex;
    width: 64px;
    & > a {
      padding-right: 24px;
      color: #fff;
      opacity: ${props.opacity};
      transition-duration: 500ms;
    }
    & > a:hover {
      opacity: 1;
      transform: scale(1.6) translate(10%, -20%);
      transition-duration: 150ms;
    }
  `;
  return (
      <div>
        <div className={FooterSocial}>
          <a href="https://www.facebook.com/jirayunlp">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nlp_jirayu/">
            <i className="fa fa-instagram"></i>
          </a>

          <a href="https://www.youtube.com/channel/UCkuktA0dNvT9Te3-V0nl9zg">
            <i className="fa fa-youtube-play"></i>
          </a>
          <a href="https://m.me/jirayunlp">
            <i className="fa fa-comment"></i>
          </a>
          <a href="mailto:Jirayu.Ninl@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
  );
}
