import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import { css } from "~/styled-system/css";
import { hstack } from "~/styled-system/patterns";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <div class={container}>
        <Header />
        <main class={main}>
          <Slot />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
});

const main = css({
  w: "full",
  p: {
    base: "5",
    smDown: "2",
  },
});

const container = hstack({
  gap: "0",
  bg: {
    base: "slate.100",
    _dark: "slate.700",
    _light: "slate.100",
  },
  color: "text",
  alignItems: "start",
  position: "relative",
  transitionDuration: "slow",
  transitionProperty: "background",
});
