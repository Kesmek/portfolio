import {
  component$,
  createContext,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import Sidebar from "../components/sidebar/sidebar";
import { DarkColors, LightColors } from "~/utils/constants";

interface AppContext {
  darkMode: boolean;
}

export const appContext = createContext<AppContext>("App-Context");

export default component$(() => {
  const state = useStore({
    darkMode: true,
  });

  useContextProvider(appContext, state);
  useClientEffect$(({ track }) => {
    track(() => state.darkMode);
    if (state.darkMode) {
      document.documentElement.style.setProperty(
        "--primary",
        DarkColors.Primary,
      );
      document.documentElement.style.setProperty(
        "--secondary",
        DarkColors.Secondary,
      );
      document.documentElement.style.setProperty("--text", DarkColors.Text);
    } else {
      document.documentElement.style.setProperty(
        "--primary",
        LightColors.Primary,
      );
      document.documentElement.style.setProperty(
        "--secondary",
        LightColors.Secondary,
      );
      document.documentElement.style.setProperty("--text", LightColors.Text);
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
