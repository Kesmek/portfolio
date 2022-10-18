import { createContext } from "@builder.io/qwik";

interface AppContext {
  darkMode: boolean;
}

export default createContext<AppContext>("App-Context");
