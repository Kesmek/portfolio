import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { appContext } from "~/routes/layout";
import style, {
  anchor,
  aside,
  contact,
  icon,
  li,
  profileImage,
  themeButton,
  ul
} from "./sidebar.css";

export default component$(() => {
  useStylesScoped$(style);
  const state = useContext(appContext);

  const toggleDarkMode$ = $(() => {
    state.darkMode = !state.darkMode;
  });

  return (
    <aside class={aside}>
      <a class={themeButton} preventdefault:click onClick$={toggleDarkMode$}
         title={"Toggle Dark Mode"}>
        <i
          class={`fa-solid fa-${state.darkMode
            ? "sun"
            : "moon"} ${icon}`}/>
      </a>
      <img
        class={profileImage}
        src={"./profile-pic.jpg"}
        alt={"Image of myself"}
      />
      <ul class={ul}>
        <li class={li}>
          <a class={anchor} href="#intro">Intro</a>
        </li>
        <li class={li}>
          <a class={anchor} href="#about">About</a>
        </li>
        <li class={li}>
          <a class={anchor} href="#resume">Resume</a>
        </li>
        <li class={li}>
          <a class={anchor} href="#projects">Projects</a>
        </li>
      </ul>
      <div class={contact}>
        <a
          className={anchor}
          href={"https://github.com/Kesmek"}
          target={"_blank"}
        >
          <i className={`fa-brands fa-github ${icon}`}/>
        </a>
        <a
          className={anchor}
          href={"https://www.linkedin.com/in/justin-scopelleti-5b023a180/"}
          target={"_blank"}
        >
          <i className={`fa-brands fa-linkedin ${icon}`}/>
        </a>
        <a
          className={anchor}
          href={"mailto:justin.scopelleti@gmail.com"}
          target={"_blank"}
        >
          <i className={`fa-solid fa-envelope ${icon}`}/>
        </a>
        <a
          className={anchor}
          href={"tel:+1-514-754-1427"}
          target={"_blank"}
        >
          <i className={`fa-solid fa-phone ${icon}`}/>
        </a>
      </div>
    </aside>
  );
});
