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
import { theme } from "~/utils/constants";

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
    activeColor = theme[app.darkMode ? "dark" : "light"]["--dark-purple"],
    active = false,
    backgroundColor = theme[app.darkMode ? "dark" : "light"]["--dark-grey"],
    inactiveColor = theme[app.darkMode ? "dark" : "light"]["--light-grey"],
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
