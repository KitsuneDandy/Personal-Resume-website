//Src/Component/MainData/degrees.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import "./degrees.scss";

export default function Degrees(props) {
  const { lang } = React.useContext(LocaleContext);

  return (
    <div>
      <span>{props.degreesData.name[lang]}</span>
      <span>{props.degreesData.location[lang]}</span>
      <span>{props.degreesData.year}</span>
    </div>
  );
}
