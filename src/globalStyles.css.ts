import {
  createGlobalTheme,
  createThemeContract,
  globalStyle
} from "@vanilla-extract/css";
import { theme } from "~/utils/constants";
import { style } from "styled-vanilla-extract/qwik";

export default "CSS";
export const appTheme = createThemeContract({
  colors: {
    border: "",
    brandDark: "",
    brandLight: "",
    highlight: "",
    primary: "",
    secondary: "",
    text: ""
  }
});

createGlobalTheme(":root", appTheme, {
  colors: theme.dark
});

globalStyle(":root", {
  scrollBehavior: "smooth"
});

globalStyle("p, strong, span, h1, h2, h3, a", {
  color: appTheme.colors.text,
  margin: 0,
  padding: 0
});

globalStyle("a", {
  textDecoration: "none"
});

globalStyle("h1", {
  fontSize: "2em",
  marginBottom: "20px"
});

globalStyle("h2", {
  marginBottom: "10px"
});

globalStyle("h3", {
  textDecoration: "underline",
  margin: "10px 0px"
});

globalStyle("ul, li, div", {
  display: "flex",
  margin: 0,
  padding: 0,
  justifyContent: "center",
  gap: "10px"
});

globalStyle("ul", {
  flexDirection: "column"
});

export const body = style({
  margin: 0
});

export const primaryBody = style({
  margin: 0,
  backgroundColor: appTheme.colors.primary,
  color: appTheme.colors.text,
  padding: "15px",
  textAlign: "center",
  justifyContent: "flex-start",
  flexDirection: "column"
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: "265px"
});

export const highlightAnchor = style({
  ":hover": {
    color: appTheme.colors.highlight
  }
});

export const footerAnchor = style({
  fontSize: "0.8em",
  selectors: {
    "&:hover:not(:active)": {
      textDecoration: "underline"
    },
    "&:active": {
      color: appTheme.colors.highlight
    }
  }
});

export const row = style({
  display: "flex",
  flexDirection: "row"
});

export const gap = style({
  gap: "10px"
});

export const screenShot = style({
  width: "10em"
});
