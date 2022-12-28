import { style } from "styled-vanilla-extract/qwik";
import { appTheme } from "~/globalStyles.css";

export default "CSS";

export const section = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%"
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: appTheme.colors.secondary,
  borderBottom: `${appTheme.colors.highlight} 10px solid`,
  borderRadius: "10px",
  boxShadow: `0 0 130px -50px ${appTheme.colors.brandLight}`,
  maxWidth: "800px",
  minHeight: "fit-content",
  padding: "20px 40px",
  margin: "15px 0px"
});
