//src/Component/Interest/interestIcon.js

import React from "react";
import "./interestIcon.scss";

export default function InterestIcon() {
  return (
    <div className="InterestIcon">
      <img src={`${process.env.PUBLIC_URL}/img/hob1.jpg`} alt="Photograpgy" />
      <img src={`${process.env.PUBLIC_URL}/img/hob2.jpg`} alt="Video Games" />
      <img src={`${process.env.PUBLIC_URL}/img/hob3.jpg`} alt="Coffee" />
      <img src={`${process.env.PUBLIC_URL}/img/hob4.jpg`} alt="Music" />
      <img src={`${process.env.PUBLIC_URL}/img/hob5.jpg`} alt="Japan" />
      <img src={`${process.env.PUBLIC_URL}/img/hob6.jpg`} alt="Ideas" />
    </div>
  );
}
