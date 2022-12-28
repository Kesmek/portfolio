import { style } from "styled-vanilla-extract/qwik";
import { createVar } from "@vanilla-extract/css";
import { darkTheme } from "~/globalDark.css";
import { appTheme } from "~/globalStyles.css";

export default "CSS";

export const background = createVar();

export const root = style([
  darkTheme, {
    display: "flex",
    margin: "0",
    width: "50px",
    height: "25px",
    borderRadius: "30px",
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    background: appTheme.colors.secondary,
    borderColor: appTheme.colors.border,
    borderWidth: "3px",
    borderStyle: "solid",
    ":hover": {
      cursor: "pointer"
    }
  }
]);

export const knub = style({
  height: "100%",
  aspectRatio: "1",
  borderRadius: "100%",
  position: "absolute",
  transition: "left .15s linear"
});

// .active-background {
//     height: inherit;
//     margin: 0;
//     transition: width .15s linear;
// }
