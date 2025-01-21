import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5"
import Container6 from "./Container6";

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        {/* Grid layout for containers */}
        <div className="works-container">
          {/* Container 1 */}
          <Container1 />

          {/* Container 2 */}
          <Container2 />

          <Container3/>
          <Container4/>
          <Container5/>
          <Container6></Container6>
        </div>
      </div>
    </div>
  );
}
