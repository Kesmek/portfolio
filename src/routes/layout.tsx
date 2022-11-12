import {
  component$,
  createContext,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import Sidebar from "../components/sidebar/sidebar";
import globalStyle from "~/global.css?inline";
import { theme } from "~/utils/constants";

interface AppContext {
  darkMode: boolean;
}

export const appContext = createContext<AppContext>("App-Context");

export default component$(() => {
  useStyles$(globalStyle);
  const state = useStore({
    darkMode: true,
  });

  useContextProvider(appContext, state);

  useClientEffect$(({ track }) => {
    track(() => state.darkMode);
    const themeStyle = theme[state.darkMode ? "dark" : "light"];
    for (const item in themeStyle) {
      document.documentElement.style.setProperty(
        item,
        themeStyle[item as keyof typeof themeStyle],
      );
    }
  });

  return (
    <>
      <Sidebar />
      <main>
        <Slot />
      </main>
      <footer>
        <a href="https://qwik.builder.io/" target="_blank">
          Website made using qwik
        </a>
      </footer>
    </>
  );
});
