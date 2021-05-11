import React from "react";
import { LANGUAGES } from "./models";

export const AppContext = React.createContext({
  language: LANGUAGES.EN,
  setLoading: (value: boolean) => {}
});