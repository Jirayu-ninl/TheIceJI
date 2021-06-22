import React from "react";
import IJN, { Object } from "components/theme/TheIceJI";

export default function test() {
  return (
    <div>
      <IJN.Section Yc H={600} style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#fff" }}>Hello Madafaker</h1>
        <IJN.Container center xl style={{ backgroundColor: "#444" }}>
          <IJN.Div style={{ paddingRight: 50 }}>
            <h4 style={{ color: "#fff" }}>Inner 01 / Text 1</h4>
            <h4 style={{ color: "#fff" }}>Inner 01 / Text 2</h4>
            <h4 style={{ color: "#fff" }}>Inner 01 / Text 3</h4>
          </IJN.Div>
          <IJN.Div>
            <h4 style={{ color: "#fff" }}>Inner 02 / Text 1</h4>
            <h4 style={{ color: "#fff" }}>Inner 02 / Text 2</h4>
            <h4 style={{ color: "#fff" }}>Inner 02 / Text 3</h4>
          </IJN.Div>
        </IJN.Container>
      </IJN.Section>
      <IJN.Section H100vh style={{ backgroundColor: "#111" }}>
        <IJN.Container H={500} xl>
          <IJN.Flex Y Ac Jc W={800} style={{backgroundColor: "rgba(255, 255, 0, 0.1)"}}>
            <h1 style={{ color: "#fff" }}>Hello 001</h1>
            <h1 style={{ color: "#fff" }}>Hello 002</h1>
          </IJN.Flex>
        </IJN.Container>
      </IJN.Section>
    </div>
  );
}
