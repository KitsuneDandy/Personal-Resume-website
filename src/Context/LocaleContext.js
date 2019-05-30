import React from "react";

const LocaleContext = React.createContext({
  lang: "en",
  setLang: null
});

export default LocaleContext;
