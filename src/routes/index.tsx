import { component$ } from "@builder.io/qwik";
import Card from "../components/card/card";
import Skill from "~/components/skill/skill";

export default component$(() => {
  return (
    <>
      <Card title={"Justin Scopelleti"} id={"intro"}>
        <p>
          {" "}
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
        <strong>Contact Information</strong>
        <span>Justin Scopelleti</span>
        <span>
          <a href={"tel:+1514-754-1427"}>514-754-1427</a>
        </span>
        <span>
          <a href={"mailto:justin.scopelleti@gmail.com"}>
            justin.scopelleti@gmail.com
          </a>
        </span>
      </Card>
      <Card title={"Resume"}>
        <p class={"subtitle"}>Education</p>
        <span class={"education"}>John Abbott College</span>
        <ul>
          <li>
            <div class={"row gap"}>
              Sciences Program <span>2015 - 2017</span>
            </div>
          </li>
        </ul>
        <span class={"education"}>McGill University</span>
        <ul>
          <li>
            <div class={"row gap"}>
              Major Computer Science <span>2017 - 2022</span>
            </div>
          </li>
          <li>
            <div class={"row gap"}>
              Minor Physics <span>2017 - 2019</span>
            </div>
          </li>
        </ul>
        <p className={"subtitle"}>Skills</p>
        <Skill
          barColor={"#2277ee"}
          description={"2+ years - adept, use regularly"}
          experiencePercentage={85}
          imageAlt={"Typescript Icon"}
          imageSrc={"./typescript.svg"}
          title={"TypeScript"}
        />
        <Skill
          barColor={"#FFBB00"}
          description={"2+ years - basics, use select services"}
          experiencePercentage={70}
          imageAlt={"AWS Icon"}
          imageSrc={"./aws.svg"}
          title={"Amazon Web Services"}
        />
        <Skill
          barColor={"#559900"}
          description={"2.5+ years - adept, use comfortably (includes npm)"}
          experiencePercentage={80}
          imageAlt={"NodeJS Icon"}
          imageSrc={"./nodejs.svg"}
          title={"NodeJS"}
        />
        <Skill
          barColor={"#33DDFF"}
          description={"2.5+ years - advanced, use frequently"}
          experiencePercentage={90}
          imageAlt={"React Icon"}
          imageSrc={"./react.svg"}
          title={"React/React Native"}
        />
      </Card>
      <Card title={"Projects"}>
        <p class={"subtitle"}>Puncher</p>
        <p class={"description"}>
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
            className={"mobile-img"}
            alt={"Image of Puncher app with punches included."}
          />
        </a>
        <p className={"subtitle"}>Discord Bot(s)</p>
        <p className={"description"}>
          Created multiple discord bots for various purposes, mostly related to
          administration and organization. Made with NodeJS, TypeScript and some
          wrappers around the discord API. Heavily leverages the use of
          dependency injection, and minor database utilities (modeling,
          read/write) using Prisma.
        </p>
        <div class={"row"}>
          <a
            href={"https://github.com/Kesmek/botmek"}
            className={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"botmek.png"}
              className={"mobile-img"}
              alt={"Image of botmek discord bot profile."}
            />
          </a>
          <a
            href={"https://github.com/Kesmek/council-bot"}
            className={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"council-bot.png"}
              className={"mobile-img"}
              alt={"Image of council-bot discord bot profile."}
            />
          </a>
          <a
            href={"https://github.com/Kesmek/devmek"}
            className={"icon-link"}
            target={"_blank"}
          >
            <img
              src={"devmek.png"}
              className={"mobile-img"}
              alt={"Image of devmek discord bot profile."}
            />
          </a>
        </div>
      </Card>
    </>
  );
});
