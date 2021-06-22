import React from 'react'
import { css } from "@emotion/css";

export default function panel() {

    const Panel = css`
        width: 212px;
        height: 374px;
        background: url(/gui/PanelDirectory.png);
        /* background-color: #000; */
    `

    return (
        <div>
            <div className={Panel}>
                {/* <h3>Panel</h3> */}
            </div>
        </div>
    )
}
