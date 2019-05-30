//Src/Component/Interest/interst.js

import React from "react";
import LocaleContext from "../../Context/LocaleContext";
import SocialMediaIcon from "./socialMediaIcon";
import InterestIcon from "./interestIcon.js";
import "./interest.scss";

export default function Interest(props) {
  const { lang } = React.useContext(LocaleContext);
  return (
    <div className="InterestContainer">
      <div className="InterestBloc">
        <div className="InterestContent">
          <h1>{props.interestData.interest.title[lang]}</h1>
          <InterestIcon />
          <span>{props.interestData.interest.list[lang]}</span>
        </div>
      </div>
      <div className="SocialContainer">
        <h1>{props.interestData.social.title[lang]}</h1>
        <div className="SocialIconCOntainer">
          {props.interestData.social.medias.map((item, i) => {
            return <SocialMediaIcon socialMediaData={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
