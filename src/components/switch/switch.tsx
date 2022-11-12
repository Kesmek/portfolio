import {
  $,
  component$,
  PropFunction,
  useContext,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import style from "./switch.css?inline";
import { appContext } from "~/routes/layout";
import { DarkColors, LightColors } from "~/utils/constants";

interface SwitchProps {
  active?: boolean;
  activeColor?: string;
  backgroundColor?: string;
  inactiveColor?: string;
  onClick$?: PropFunction<() => void>;
}

export default component$((props: SwitchProps) => {
  const app = useContext(appContext);
  const {
    activeColor = app.darkMode ? DarkColors.DarkPurple : LightColors.DarkPurple,
    active = false,
    backgroundColor = app.darkMode ? DarkColors.DarkGrey : LightColors.DarkGrey,
    inactiveColor = app.darkMode ? DarkColors.LightGrey : LightColors.LightGrey,
    onClick$,
  } = props;
  const state = useStore({
    activeColor,
    active,
    backgroundColor,
    inactiveColor,
  });
  useStylesScoped$(style);

  const handleClick = $(async () => {
    if (onClick$) {
      await onClick$();
    }
    state.active = !state.active;
  });

  return (
    <div
      class={"root"}
      style={{
        "background-color": state.backgroundColor,
        border: `${state.backgroundColor} 5px solid`,
      }}
      preventdefault:click
      onClick$={handleClick}
    >
      <div
        class={"knub"}
        style={{
          "background-color": state.active
            ? state.activeColor
            : state.inactiveColor,
          left: state.active ? "50%" : "0%",
          opacity: state.active ? 1 : 0.5,
        }}
      />
    </div>
  );
});
