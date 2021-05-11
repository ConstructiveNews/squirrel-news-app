import React from "react";
import { LANGUAGES } from "./models";

export const LanguageCtx = React.createContext({
  language: LANGUAGES.EN
});