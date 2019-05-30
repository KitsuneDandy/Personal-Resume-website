//Src/Component/Xp/xp.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import XpBloc from "./xpBloc";
import "./xp.scss";

export default function Xp(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="XpContainer">
      <h2>{props.xpData.title[lang]}</h2>
      <div className="XpBlocList">
        {props.xpData.experiences.map((item, i) => {
          return <XpBloc xpData={item} key={i} />;
        })}
      </div>
    </div>
  );
}
