import { createTheme } from "@vanilla-extract/css";
import { appTheme } from "~/globalStyles.css";
import { theme } from "~/utils/constants";

export const darkTheme = createTheme(appTheme, {
  colors: theme.dark
});

