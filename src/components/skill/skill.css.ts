import { style } from "styled-vanilla-extract/qwik";

export default "CSS";

export const icon = style({
  fontSize: "2em",
  width: "60px"
});

export const bar = style({
  width: "100%",
  height: "10px",
  borderRadius: "0 5px 5px 0",
  margin: 0
});

export const container = style({
  width: "100%",
  padding: "0 10px",
  flexDirection: "column",
  alignItems: "flex-start"
});

export const skill = style({
  margin: "10px 0"
});
