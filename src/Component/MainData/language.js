//src/Component/MainData/language.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import "./language.scss";

export default function Language(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="language">
      <img
        src={`${process.env.PUBLIC_URL}/img/${props.languageData.icon}`}
        alt="flag"
      />
      <span>{props.languageData.level[lang]}</span>
    </div>
  );
}
