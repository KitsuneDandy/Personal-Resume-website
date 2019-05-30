//Src/component/mainData/skills.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import "./skills.scss";

export default function Skills(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="SkillContainer">
      <div className="Hexagon">
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.skillsData.icon}`}
          alt="Skill"
        />
      </div>

      <div className="SkillName">{props.skillsData.name[lang]}</div>
    </div>
  );
}
