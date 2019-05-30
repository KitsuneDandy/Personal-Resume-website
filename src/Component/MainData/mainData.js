//Src/Component/MainData/mainData.js

import React from "react";
import "./mainData.scss";
import SectionA from "./sectionA";
import SectionB from "./sectionB";

export default function MainData(props) {
  return (
    <div className="MainDataContainer">
      <div className="SectionContent">
        <div className="SectionAandB">
          <div className="SectionA">
            <SectionA mainData={props.mainData} />
          </div>
          <div className="SectionB">
            <SectionB mainData={props.mainData} skillsData={props.skillsData} />
          </div>
        </div>
      </div>
      <div className="SectionC">
        <img
          src={`${process.env.PUBLIC_URL}/img/me.jpg`}
          alt="Nicolas Goussin"
        />
      </div>
    </div>
  );
}
