//Src/Component/Interest/socialMediaIcon.js

import React from "react";
import "./socialMediaIcon.scss";

export default function SocialMediaIcon(props) {
  return (
    <div className="SocialMediaIcon">
      <div className="SocialIcon">
        <a
          href={props.socialMediaData.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${props.socialMediaData.icon}`} />
        </a>
      </div>
      <div className="ngee">
        <a
          href={props.socialMediaData.link}
          target="_blank"
          rel="noopener noreferrer"
          dangerouslySetInnerHTML={{ __html: props.socialMediaData.title }}
        />
      </div>
    </div>
  );
}
