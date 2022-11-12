import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./sidebar.css?inline";
import { appContext } from "~/routes/layout";
import Switch from "../switch/switch";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useContext(appContext);

  const toggleDarkMode$ = $(() => {
    state.darkMode = !state.darkMode;
  });

  return (
    <aside>
      <div class={"dark-mode"}>
        <img
          src={state.darkMode ? "sun_light.svg" : "sun.svg"}
          class={"icon"}
          alt={"Dark mode icon"}
          title={"Dark Mode"}
        />
        <Switch
          onClick$={toggleDarkMode$}
          active={state.darkMode}
        />
      </div>
      <img
        class={"profileImage"}
        src={"./profile-pic.jpg"}
        alt={"Image of myself"}
      />
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <table>
        <tbody>
        <tr>
          <td>
            <a href={"https://github.com/Kesmek"} target={"_blank"}>
              <img
                class={"icon"}
                src={state.darkMode ? "github_light.svg" : "github.svg"}
                alt={"Github Link"}
                title={"Github"}
              />
            </a>
          </td>
          <td>
            <a
              href={
                "https://www.linkedin.com/in/justin-scopelleti-5b023a180/"
              }
              target={"_blank"}
            >
              <img
                class={"icon"}
                src={state.darkMode ? "linkedin_light.svg" : "linkedin.svg"}
                alt={"LinkedIn Link"}
                title={"LinkedIn"}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href={"mailto:justin.scopelleti@gmail.com"} target={"_blank"}>
              <img
                class={"icon"}
                src={state.darkMode ? "email_light.svg" : "email.svg"}
                alt={"Email Link"}
                title={"Email"}
              />
            </a>
          </td>
          <td>
            <a href={"tel:+1514-754-1427"} target={"_blank"}>
              <img
                class={"icon"}
                src={state.darkMode ? "phone_light.svg" : "phone.svg"}
                alt={"Phone Number"}
                title={"Phone Number"}
              />
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </aside>
  );
});
