//Src/Component/MainData/sectionA

import React from "react";
import "./sectionA.scss";
import Language from "./language.js";
import Degrees from "./degrees.js";
import LocaleContext from "../../Context/LocaleContext";

export default function SectionA(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="SectionAContent">
      <div className="LogoSection">
        <div className="Logo" />
        <div className="LogoTextContent">
          <span>
            <a href={`mailto:${props.mainData.email}`}>
              {props.mainData.email}
            </a>
          </span>
          <span>
            <a href={props.mainData.website}>{props.mainData.website}</a>
          </span>
          <span>{props.mainData.phonenumber}</span>
        </div>
      </div>
      <span className="Name">
        {` ${props.mainData.firstname} ${props.mainData.lastname}`}
      </span>

      <span className="Job">{props.mainData.jobtitle}</span>
      <span className="Job">{props.mainData.jobtitle2}</span>
      <span>{props.mainData.adresses}</span>
      <h1>{props.mainData.degrees.title[lang]}</h1>
      {props.mainData.degrees.list.map((item, i) => {
        return <Degrees degreesData={item} key={i} />;
      })}
      <h1>{props.mainData.languages.title[lang]}</h1>
      {props.mainData.languages.list.map((item, i) => {
        return <Language languageData={item} key={i} />;
      })}
    </div>
  );
}
