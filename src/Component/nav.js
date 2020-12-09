//src/Component/nav.js

import React from "react";
import LocaleContext from "../Context/LocaleContext";
import "./nav.scss";

export default function NavBar(props) {
  const { lang, setLang } = React.useContext(LocaleContext);
  const setFr = event => {
    event.preventDefault();
    setLang("fr");
  };
  const setEn = event => {
    event.preventDefault();
    setLang("en");
  };
  return (
    <div className="NavBarContainer">
      <div className="NavBarContent">
        <div className="TitleNav">
          <a
            href="https://twitter.com/DandyKitsune"
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg hvr-icon" />
          </a>
          <a
            href="http://www.instagram.com/ngee"
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg hvr-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ngee"
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in fa-lg hvr-icon" />
          </a>
          <a
            href="https://github.com/KitsuneDandy"
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg hvr-icon" />
          </a>
          <a
            href="https://book.ngee.me"
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fas fa-swatchbook fa-lg  hvr-icon" />{" "}
            {props.portfolioData.title[lang]}
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/docs/${props.resumepdfData.link[lang]}`}
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fas fa-id-badge fa-lg  hvr-icon" />
            {props.resumepdfData.title[lang]}
          </a>
        </div>

        <div className="TitleNavMobile">
          <a
            href={`${process.env.PUBLIC_URL}/docs/${props.portfolioData.link[lang]}`}
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fas fa-swatchbook fa-lg  hvr-icon" />
            {props.portfolioData.title[lang]}
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/docs/${props.resumepdfData.link[lang]}`}
            target="_blank"
            className="hvr-icon-spin"
            rel="noopener noreferrer"
          >
            <i className="fas fa-id-badge fa-lg  hvr-icon" />
            {props.resumepdfData.titlemobile[lang]}
          </a>
        </div>

        <div className="LanguageSelec">
          <a href="" onClick={setFr}>
            Français
          </a>

          <a href="" onClick={setEn}>
            English
          </a>
          {/* <i className="fas fa-bars fa-lg" /> */}
        </div>
      </div>
    </div>
  );
}
