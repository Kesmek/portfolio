import { style } from "styled-vanilla-extract/qwik";
import { appTheme } from "~/globalStyles.css";

export default "";

const flex = style({
  display: "flex",
  flex: 1
});

export const icon = style([
  flex, {
    flex: 0,
    fontSize: "1.5em"
  }
]);

export const aside = style([
  flex, {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: appTheme.colors.secondary,
    borderRadius: "10px",
    boxShadow: `0 0 30px -10px ${appTheme.colors.brandLight}`,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    width: "250px"
  }
]);

export const profileImage = style([
  flex, {
    aspectRatio: "1",
    border: `${appTheme.colors.border} 3px solid`,
    borderRadius: "50%",
    objectFit: "cover",
    width: "75%",
    margin: "10px 0"
  }
]);

export const ul = style([
  flex, {
    flexDirection: "column",
    fontSize: "26px",
    listStyle: "none",
    padding: "0",
    textAlign: "center",
    width: "100%",
    gap: 0
  }
]);

export const li = style([
  flex, {
    padding: 0
  }
]);

export const anchor = style([
  flex, {
    justifyContent: "center",
    color: appTheme.colors.text,
    textDecoration: "none",
    padding: "0.5em",
    transition: "background-color 100ms ease-out",
    ":hover": {
      backgroundColor: appTheme.colors.border
    },
    selectors: {
      "li &": {
        padding: "0.5em 0"
      },
      "&:active": {
        color: appTheme.colors.highlight
      }
    }
  }
]);

export const contact = style([
  flex, {
    borderTop: `${appTheme.colors.border} 3px solid`,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  }
]);
export const themeButton = style([
  flex, anchor, {
    ":hover": {
      cursor: "pointer"
    },
    padding: "0.75em",
    alignSelf: "flex-start",
    borderRadius: "0 0 0.6em 0"
  }
]);
