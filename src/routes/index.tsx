import { component$, useStyles$ } from "@builder.io/qwik";
import Card from "../components/card/card";
import Skill from "~/components/skill/skill";
import globalStyle, {
  gap,
  highlightAnchor,
  row,
  screenShot
} from "~/globalStyles.css";

export default component$(() => {
  useStyles$(globalStyle);
  return (
    <>
      <Card title={"Justin Scopelleti"} id={"intro"}>
        <p>
          I'm a highly motivated software developer with an interest in
          performant apps. I have worked across the full technology stack for
          mobile development and am currently learning web development. I am
          always researching ways to improve my programming skills and strive to
          make each project something I can be proud of.
        </p>
      </Card>
      <Card title={"About"}>
        <p>
          I'm a junior software developer with experience primarily developing
          cross-platform mobile applications, and I'm currently working with web
          development as well. For mobile development I've used React Native on
          the front-end alongside MongoDB and Amazon Web Services (Cognito, API
          Gateway, and Lambda) on the back-end. For web development I am
          actively working with React.js and Typescript to create performant web
          applications. I also have some experience working with Java, MySQL,
          and C++. I have a particular interest in creating/optimizing
          performant apps, and actively seek ways of improving my skills with
          those goals in mind.
        </p>
        <br/>
        <strong>Contact Information</strong>
        <span>Justin Scopelleti</span>
        <span>
          <a href={"tel:+1514-754-1427"}
             class={highlightAnchor}>514-754-1427</a>
        </span>
        <span>
          <a href={"mailto:justin.scopelleti@gmail.com"}
             class={highlightAnchor}>
            justin.scopelleti@gmail.com
          </a>
        </span>
      </Card>
      <Card title={"Resume"}>
        <h2>Education</h2>
        <h3>John Abbott College</h3>
        <ul>
          <li>
            <div class={[row, gap]}>
              Sciences Program <strong>2015 - 2017</strong>
            </div>
          </li>
        </ul>
        <h3>McGill University</h3>
        <ul>
          <li>
            Major Computer Science <strong>2017 - 2022</strong>
          </li>
          <li>
            Minor Physics <strong>2017 - 2019</strong>
          </li>
        </ul>
        <h3>Skills</h3>
        <Skill
          barColor={"#2277ee"}
          description={"3+ years - adept, use regularly (with TypeScript)"}
          experiencePercentage={85}
          source={"fa-brands fa-js"}
          title={"JavaScript/TypeScript"}
        />
        <Skill
          barColor={"#FFBB00"}
          description={"2+ years - basics, use select services"}
          experiencePercentage={70}
          source={"fa-brands fa-aws"}
          title={"Amazon Web Services"}
        />
        <Skill
          barColor={"#559900"}
          description={"2.5+ years - adept, use comfortably (with npm)"}
          experiencePercentage={80}
          source={"fa-brands fa-node"}
          title={"NodeJS"}
        />
        <Skill
          barColor={"#33DDFF"}
          description={"2.5+ years - advanced, use frequently"}
          experiencePercentage={90}
          source={"fa-brands fa-react"}
          title={"React/React Native"}
        />
      </Card>
      <Card title={"Projects"}>
        <h2>Puncher</h2>
        <p>
          Created a simple app in React Native for tracking the hours for a
          shift-based job. Included ability to calculate total hours worked over
          a given period, editing incorrect punch-in/punch-out times (with a
          visual cue to mark that it's been edited), and support for tracking
          more than one job at once.
        </p>
        <a
          href={"https://github.com/Kesmek/Puncher"}
          class={"icon-link"}
          target={"_blank"}
        >
          <img
            src={"puncher_demo.png"}
            class={screenShot}
            alt={"Image of Puncher app with punches included."}
          />
        </a>
        <h2>Discord Bot(s)</h2>
        <p>
          Created multiple discord bots for various purposes, mostly related to
          administration and organization. Made with NodeJS, TypeScript and some
          wrappers around the discord API. Heavily leverages the use of
          dependency injection, and minor database utilities (modeling,
          read/write) using Prisma.
        </p>
        <div>
          <a
            href={"https://github.com/Kesmek/botmek"}
            class={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"botmek.png"}
              class={screenShot}
              alt={"Image of botmek discord bot profile."}
            />
          </a>
          <a
            href={"https://github.com/Kesmek/council-bot"}
            class={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"council-bot.png"}
              class={screenShot}
              alt={"Image of council-bot discord bot profile."}
            />
          </a>
          <a
            href={"https://github.com/Kesmek/devmek"}
            class={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"devmek.png"}
              class={screenShot}
              alt={"Image of devmek discord bot profile."}
            />
          </a>
        </div>
      </Card>
    </>
  );
});
