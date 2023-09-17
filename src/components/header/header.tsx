import { component$, $ } from "@builder.io/qwik";
import ImageProfilePic from "/public/profile-pic.jpg?jsx";
import { css, cx } from "~/styled-system/css";
import {
  LuDownload,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMenu,
  LuMoon,
  LuPhone,
  LuSun,
} from "@qwikest/icons/lucide";
import { hstack, visuallyHidden, vstack } from "~/styled-system/patterns";

export default component$(() => {
  const toggleTheme$ = $(() => {
    const currVal = localStorage.getItem("theme");
    const newVal = currVal === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("class", newVal);
    localStorage.setItem("theme", newVal);
  });

  const toggleCheckbox$ = $(() => {
    const checkbox = document.getElementById(
      "drawer-toggle",
    ) as HTMLInputElement;
    checkbox.checked = false;
  });

  return (
    <div class={container}>
      <input
        type="checkbox"
        name="drawer-toggle"
        id="drawer-toggle"
        class={drawerToggle}
      />
      <header class={header}>
        <div class={buttons}>
          <button class={sun} onClick$={toggleTheme$}>
            <LuSun />
          </button>
          <button class={moon} onClick$={toggleTheme$}>
            <LuMoon />
          </button>
        </div>
        <ImageProfilePic class={profilePic} />
        <nav class={nav}>
          <ul>
            <li>
              <a href="/#intro" class={link} onClick$={toggleCheckbox$}>
                Intro
              </a>
            </li>
            <li>
              <a href="/#education" class={link} onClick$={toggleCheckbox$}>
                Education
              </a>
            </li>
            <li>
              <a href="/#skills" class={link} onClick$={toggleCheckbox$}>
                Skills
              </a>
            </li>
            <li>
              <a href="/#projects" class={link} onClick$={toggleCheckbox$}>
                Projects
              </a>
            </li>
          </ul>
          <ul class={contact}>
            <li>
              <a href={"https://github.com/Kesmek"} class={contactLink}>
                <LuGithub />
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.linkedin.com/in/justin-scopelleti-5b023a180/"
                }
                class={contactLink}
              >
                <LuLinkedin />
              </a>
            </li>
            <li>
              <a
                href={"mailto:justin.scopelleti@gmail.com"}
                class={contactLink}
              >
                <LuMail />
              </a>
            </li>
            <li>
              <a href={"tel:+1-514-754-1427"} class={contactLink}>
                <LuPhone />
              </a>
            </li>
            <li>
              <a
                href={"/public/justin-scopelleti.pdf"}
                download={"justin-scopelleti.pdf"}
                class={contactLink}
              >
                <LuDownload />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <label for="drawer-toggle" class={toggleContainer}>
        <div class={toggleButton}>
          <LuMenu />
        </div>
      </label>
      <label for="drawer-toggle" class={backgroundToggle} />
    </div>
  );
});

const container = css({
  display: "flex",
  alignItems: "center",
  h: "100vh",
  pointerEvents: "none",
  color: "text",
  smDown: {
    alignItems: "start",
    pos: "fixed",
    w: "full",
  },
  p: {
    base: "5",
    smDown: "0",
  },
  filter: "drop-shadow(0px 0px 20px token(colors.violet.500))",
  fontSize: "xx-large",
  pos: "sticky",
  top: "0",
  bottom: "0",
});

const profilePic = css({
  w: "52",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "full",
  borderColor: {
    base: "slate.300",
    _dark: "slate.900",
    _light: "slate.300",
  },
  borderWidth: "3px",
  borderStyle: "solid",
  my: "2",
});

const header = vstack({
  bg: {
    base: "slate.100",
    _dark: "slate.800",
    _light: "slate.100",
  },
  gap: "0",
  alignItems: "center",
  transitionDuration: "slow",
  pointerEvents: "auto",
  w: "fit-content",
  overflowY: "auto",
  smDown: {
    maxW: "0",
    h: "100%",
    _peerChecked: {
      maxW: "full",
    },
  },
  lg: {
    borderRadius: "md",
  },
  zIndex: "1",
});

const nav = css({
  w: "fit-content",
  h: "full",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const buttons = css({
  alignSelf: "start",
  fontSize: "xx-large",
});

const optionButton = css({
  p: "3",
  borderEndEndRadius: "md",
});

const pressable = css({
  display: "flex",
  color: "inherit",
  bg: {
    _hover: {
      base: "slate.300",
      _dark: "slate.900",
      _light: "slate.300",
    },
  },
  _active: {
    color: {
      base: "violet.500",
      _light: "violet.700",
      _dark: "violet.500",
    },
  },
  transitionProperty: "background",
  transitionDuration: "faster",
});

const sun = cx(
  css({
    _light: {
      display: "none",
    },
  }),
  pressable,
  optionButton,
);

const moon = cx(
  css({
    _dark: {
      display: "none",
    },
  }),
  pressable,
  optionButton,
);

const link = cx(
  css({
    justifyContent: "center",
    py: "1",
  }),
  pressable,
);

const contactLink = cx(
  css({
    p: "3",
  }),
  pressable,
);

const contact = hstack({
  gap: "0",
  borderColor: {
    base: "slate.300",
    _dark: "slate.900",
    _light: "slate.300",
  },
  borderTopWidth: "3px",
  justifyContent: "space-between",
});

const toggleContainer = cx(
  css({
    md: {
      display: "none",
    },
    zIndex: "1",
    transitionDuration: "slow",
    pointerEvents: "auto",
  }),
);

const drawerToggle = cx(visuallyHidden(), "peer");

const toggleButton = cx(
  css({
    w: "fit-content",
    bg: {
      base: "slate.100",
      _dark: "slate.800",
      _light: "slate.100",
    },
    cursor: "pointer",
  }),
  pressable,
  optionButton,
);

const backgroundToggle = css({
  pos: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  bg: "black",
  opacity: "0.2",
  display: "none",
  pointerEvents: "auto",
  _peerChecked: {
    display: "block",
  },
});
