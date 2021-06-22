import React from "react";

export default function scrollTop() {
  return (
    <>
      <React.Fragment>
        <div
          className="scrollTop hover-target"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>
      </React.Fragment>

      <style jsx>
        {`
          .scrollTop {
            border-radius: 50%;
            position: fixed;
            bottom: 20px;
            right: 18px;
            height: 30px;
            width: 30px;
            z-index: 99;
            background-color: #111;
            opacity: 0.5;
            transition-duration: 200ms;
          }
          .scrollTop:hover {
            opacity: 1;
            transform: scale(1.2);
            transition-duration: 200ms;
            background-color: #ddd;
          }
          .scrollTop svg {
            height: 100%;
            width: 100%;
            padding: 5px;
            color: #fff;
            opacity: 1;
          }
          .scrollTop svg:hover {
            color: #000;
          }
        `}
      </style>
    </>
  );
}
