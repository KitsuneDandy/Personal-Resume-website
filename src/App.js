import React from "react";
import LocaleContext from "./Context/LocaleContext";
import MainData from "./Component/MainData/mainData";
import Xp from "./Component/Xp/xp";
import Interest from "./Component/Interest/interest";
import NavBar from "./Component/nav";
import * as Data from "./Data/resumeData";
import "./App.scss";

function App() {
  const [lang, setLang] = React.useState("en");
  return (
    <LocaleContext.Provider value={{ lang: lang, setLang: setLang }}>
      <div className="App">
        <NavBar
          resumepdfData={Data.resumeData.resumepdf}
          portfolioData={Data.resumeData.portfolio}
        />
        <MainData mainData={Data.resumeData} skillsData={Data.SKILLS} />
        <Xp xpData={Data.XP} />
        <Interest interestData={Data.resumeData} />
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
