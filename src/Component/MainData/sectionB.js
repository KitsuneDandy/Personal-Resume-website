//Src/Component/MainData/sectionB.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import Skills from "./skills.js";
import "./sectionB.scss";

export default function SectionB(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="SectionBContent">
      <div>
        <h1>{props.mainData.goal.title[lang]}</h1>
        <span>{props.mainData.goal.desc[lang]}</span>
      </div>
      <div>
        <h1>{props.mainData.skill[lang]}</h1>
        <div className="SkillsList">
          {props.skillsData.map((item, i) => {
            return <Skills skillsData={item} key={i} />;
          })}
        </div>

        <span>{props.mainData.otherskills[lang]}</span>
      </div>
    </div>
  );
}
