//Src/Componet/Xp/xpBloc.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import "./xpBloc.scss";

export default function XpBloc(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="XpBlocContainer">
      <div className="XpBlocHeader">
        <div className="XpBlocYear">
          <h3>{props.xpData.lastyear}</h3>
          <span>{props.xpData.firstyear[lang]}</span>
        </div>
        <h3>{props.xpData.company} </h3>
        <span className="JobTitle">{props.xpData.jobtitle[lang]} </span>
      </div>
      <span
        className="Description"
        dangerouslySetInnerHTML={{ __html: props.xpData.content[lang] }}
      />
    </div>
  );
}
