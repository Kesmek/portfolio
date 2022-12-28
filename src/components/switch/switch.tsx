import {
  $,
  component$,
  PropFunction,
  useContext,
  useStore,
  useStyles$
} from "@builder.io/qwik";
import style, { knub, root } from "./switch.css";
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
  useStyles$(style);
  const app = useContext(appContext);
  const {
    activeColor = theme[app.darkMode
      ? "dark"
      : "light"]["brandDark"],
    active = false,
    backgroundColor = theme[app.darkMode
      ? "dark"
      : "light"]["border"],
    inactiveColor = theme[app.darkMode
      ? "dark"
      : "light"]["highlight"],
    onClick$
  } = props;
  const state = useStore({
    activeColor,
    active,
    backgroundColor,
    inactiveColor
  });

  const handleClick = $(async () => {
    if (onClick$) {
      await onClick$();
    }
    state.active = !state.active;
  });

  return (
    <div
      class={root}
      // style={assignInlineVars({
      //   [background]: state.backgroundColor
      // })}
      preventdefault:click
      onClick$={handleClick}
    >
      <div
        class={knub}
        style={{
          "background-color": state.active
            ? state.activeColor
            : state.inactiveColor,
          left: state.active
            ? "50%"
            : "0%",
          opacity: state.active
            ? 1
            : 0.5
        }}
      />
    </div>
  );
});
