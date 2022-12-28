import {
  component$,
  createContext,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
  useStyles$
} from "@builder.io/qwik";
import Sidebar from "~/components/sidebar/sidebar";
import { darkTheme } from "~/globalDark.css";
import { lightTheme } from "~/globalLight.css";
import globalStyle, {
  footerAnchor,
  main,
  primaryBody
} from "~/globalStyles.css";

interface AppContext {
  darkMode: boolean;
}

export const appContext = createContext<AppContext>("App-Context");

export default component$(() => {
  useStyles$(globalStyle);
  const state = useStore({
    darkMode: true
  });

  useContextProvider(appContext, state);

  useClientEffect$(({ track }) => {
    track(state.darkMode);

    state.darkMode = localStorage.getItem("theme") === "dark";

  })

  return (
    <div class={[
      primaryBody, state.darkMode
        ? darkTheme
        : lightTheme
    ]}>
      <Sidebar/>
      <main class={main}>
        <Slot/>
        <footer>
          <a class={footerAnchor} href="https://qwik.builder.io/"
             target="_blank">
            Website made using qwik
          </a>
        </footer>
      </main>
    </div>
  );
});

