import {
  component$,
  Slot,
  useClientEffect$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import Sidebar from "../components/sidebar/sidebar";
import context from "../contexts/app";
import { DarkColors, LightColors } from "~/utils/constants";

export default component$(() => {
  const state = useStore({
    darkMode: true,
  });

  useContextProvider(context, state);
  useClientEffect$(({ track }) => {
    track(() => state.darkMode);
    if (state.darkMode) {
      document.documentElement.style.setProperty(
        "--primary",
        DarkColors.Primary
      );
      document.documentElement.style.setProperty(
        "--secondary",
        DarkColors.Secondary
      );
      document.documentElement.style.setProperty("--text", DarkColors.Text);
    } else {
      document.documentElement.style.setProperty(
        "--primary",
        LightColors.Primary
      );
      document.documentElement.style.setProperty(
        "--secondary",
        LightColors.Secondary
      );
      document.documentElement.style.setProperty("--text", LightColors.Text);
    }
    console.log(document.documentElement.style);
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
