import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { VStack } from "~/styled-system/jsx";
import { vstack } from "~/styled-system/patterns";

interface Props {
  id: string;
  title?: string;
}

export default component$<Props>(({ id, title }) => {
  return (
    <VStack gap={"0"} class={container} id={id}>
      <div class={card}>
        <h1 class={header}>{title ?? id}</h1>
        <Slot />
      </div>
    </VStack>
  );
});

const container = css({
  minH: "100vh",
  minW: "full",
  py: "5",
  alignItems: "center",
  justifyContent: "center",
  transitionDuration: "slow",
});

const card = vstack({
  smDown: {
    p: "5",
    shadow: "inset 0px 0px 100px -25px token(colors.violet.500)",
  },
  p: "10",
  shadow: "0px 0px 100px -25px token(colors.violet.500)",
  gap: "0",
  fontSize: "lg",
  bg: {
    base: "slate.100",
    _dark: "slate.800",
    _light: "slate.100",
  },
  w: {
    lg: "80%",
    md: "90%",
    smDown: "full",
  },
  minW: "50%",
  rounded: "md",
  borderBottomWidth: "thick",
  borderColor: "violet.500",
  alignItems: "center",
  textAlign: "center",
});

const header = css({
  fontSize: "xxx-large",
  fontWeight: "bold",
  mb: "5",
  textTransform: "capitalize",
});
