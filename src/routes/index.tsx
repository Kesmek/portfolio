import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card/card";
import { css, cx } from "~/styled-system/css";
import McGillImg from "/public/mcgill-university.png?jsx";
import JohnAbbottImg from "/public/john-abbott.jpg?jsx";
import PuncherDemo from "/public/puncher_demo.png?jsx";
import BotmekDemo from "/public/botmek.png?jsx";
import DevmekDemo from "/public/devmek.png?jsx";
import DaydreamDemo1 from "/public/daydream1.png?jsx";
import DaydreamDemo2 from "/public/daydream2.png?jsx";
import DaydreamDemo3 from "/public/daydream3.png?jsx";
import CouncilBotDemo from "/public/council-bot.png?jsx";
import { Grid, HStack, Stack, VStack } from "~/styled-system/jsx";
import { LuGitMerge, LuGithub } from "@qwikest/icons/lucide";
import {
  SiAmazonaws,
  SiBun,
  SiCloudflare,
  SiDocker,
  SiFirebase,
  SiGooglecloud,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
} from "@qwikest/icons/simpleicons";

export default component$(() => {
  return (
    <>
      <Card id="intro" title="Justin Scopelleti">
        <p class={text}>
          I'm a motivated software developer with an interest in building and
          maintaining performant mobile and web applications. I have worked
          across the full technology stack for mobile development (React Native,
          AWS, Node.js) and am currently learning web development. I'm
          specifically learning to use modern frameworks (Qwik, React) alongside
          html and css to build interactive websites. I’ve also experimented
          with various other technologies including Firebase, Google Cloud
          Platform (GCP), and Docker to name a few. I am always researching ways
          of improving my programming skills, find new interesting projects and
          strive to make each project something I can be proud of.
        </p>
        <details class={details}>
          <summary class={summary}>Contact Information</summary>
          <a href="tel:+1-514-754-1427" class={link}>
            514-754-1427
          </a>
          <br />
          <a href="mailto:justin.scopelleti@gmail.com" class={link}>
            justin.scopelleti@gmail.com
          </a>
          <br />
        </details>
      </Card>
      <Card id="education">
        <VStack gap={"5"}>
          <HStack class={schooling}>
            <McGillImg class={emblem} />
            <VStack gap={"0"} class={schoolInfo}>
              <h2>McGill University</h2>
              <h4>Bachelor of Science</h4>
              <Stack class={programInfo}>
                <p>Major Computer Science</p>
                <b>2017 - 2022</b>
              </Stack>
              <Stack class={programInfo}>
                <p>Minor Physics</p>
                <b>2017 - 2019</b>
              </Stack>
            </VStack>
          </HStack>
          <HStack class={schooling}>
            <JohnAbbottImg class={emblem} />
            <VStack gap={"0"} class={schoolInfo}>
              <h2>John Abbott College</h2>
              <h4>Diplôme d'études Collégiales (DEC)</h4>
              <Stack class={programInfo}>
                <span>Sciences Program</span>
                <b>2015 - 2017</b>
              </Stack>
            </VStack>
          </HStack>
        </VStack>
      </Card>
      <Card id="skills">
        <ul class={list}>
          <Grid
            gap={"4"}
            class={css({
              columns: {
                smDown: "1",
                base: "2",
              },
            })}
          >
            <li>
              <strong>App Development: </strong>Used NodeJS + TypeScript to
              create and maintain several Discord bot applications. Bots
              interact with the Discord API through a library using dependency
              injection. Some deployed in a docker container hosted on GCP,
              others self hosted on RaspberryPi using pm2.
            </li>
            <li>
              <strong>Web Development: </strong>Used React and TypeScript to
              create multiple small web pages using proper semantic HTML and
              efficiently styled with CSS. Contributed to, and actively use
              Qwik; the future of web frameworks.
            </li>
            <li>
              <strong>Documentation: </strong>Wrote structured, example driven,
              and easily readable documentation on all projects I’ve worked on,
              including for the Qwik framework.
            </li>
            <li>
              <strong>Mobile Development: </strong>Used React Native and
              TypeScript alongside many of the aforementioned tools to build
              multiple applications for Android and iOS.
            </li>
            <li>
              <strong>Tools: </strong>Git, Github, Redux, MongoDB, AWS (S3,
              Lambda, API Gateway), Firebase, Cloudflare, Docker, GCP, NodeJS,
              Bun.
            </li>
            <li>
              <strong>Languages: </strong>Ability to communicate in english
              fluently, both orally and written. Ability to communicate in
              french at an intermediate level both written and orally.
            </li>
          </Grid>
          <HStack mt={"5"} class={imgStack}>
            <a href="https://git-scm.com/" class={iconLink}>
              <LuGitMerge />
            </a>
            <a href="https://github.com/" class={iconLink}>
              <LuGithub />
            </a>
            <a href="https://redux.js.org/" class={iconLink}>
              <SiRedux />
            </a>
            <a href="https://www.mongodb.com/" class={iconLink}>
              <SiMongodb />
            </a>
            <a href="https://aws.amazon.com/" class={iconLink}>
              <SiAmazonaws />
            </a>
            <a href="https://firebase.google.com/" class={iconLink}>
              <SiFirebase />
            </a>
            <a href="https://www.cloudflare.com/" class={iconLink}>
              <SiCloudflare />
            </a>
            <a href="https://www.docker.com/" class={iconLink}>
              <SiDocker />
            </a>
            <a href="https://cloud.google.com/" class={iconLink}>
              <SiGooglecloud />
            </a>
            <a href="https://nodejs.org/en" class={iconLink}>
              <SiNodedotjs />
            </a>
            <a href="https://bun.sh/" class={iconLink}>
              <SiBun />
            </a>
          </HStack>
        </ul>
      </Card>
      <Card id="projects">
        <a
          href="https://github.com/Kesmek/Puncher"
          target="_blank"
          class={link}
        >
          <h2>Puncher</h2>
        </a>
        <p>
          An app used for locally tracking your hours for shift work. Built
          using React Native and TypeScript for cross compatibility with iOS and
          Android. Includes ability to track hours from multiple different
          employers at once, managed with Redux.
        </p>
        <a href="https://github.com/Kesmek/Puncher" target="_blank">
          <PuncherDemo class={demoScreenshot} />
        </a>
        <h2>Discord Bots</h2>
        <p>
          Built and maintained several discord bots using typescript, dependency
          injection and Docker. Hosted on google cloud platform as well as self
          hosted on a Raspberry PI.
        </p>
        <HStack class={imgStack}>
          <a href="https://github.com/Kesmek/botmek" target="_blank">
            <BotmekDemo class={demoImg} />
          </a>
          <a href="https://github.com/Kesmek/devmek" target="_blank">
            <DevmekDemo class={demoImg} />
          </a>
          <a href="https://github.com/Kesmek/council-bot" target="_blank">
            <CouncilBotDemo class={demoImg} />
          </a>
        </HStack>
        <h2>Daydream</h2>
        <p>
          A social media app; a mix of the live interactivity of Twitch and the
          social aspect of Instagram. Built using React Native, JavaScript +
          TypeScript for the frontend. The backend used AWS (S3, Lambda, API
          Gateway, AWS SNS) with JavaScript. Made in collaboration with one
          other developer which required regular meetings and communication. All
          code versions were managed with Git + Github.
        </p>
        <HStack class={imgStack}>
          <DaydreamDemo1 class={demoScreenshot} />
          <DaydreamDemo2 class={demoScreenshot} />
          <DaydreamDemo3 class={demoScreenshot} />
        </HStack>
      </Card>
    </>
  );
});

export const head: DocumentHead = {
  title: "Justin Scopelleti",
  meta: [
    {
      name: "description",
      content: "My portfolio website",
    },
  ],
  scripts: [
    {
      script: `document.documentElement.setAttribute(
      "class",
      localStorage.getItem("theme") ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
    );`,
      key: "dark-light-mode",
    },
  ],
};

const text = css({
  lineHeight: "loose",
  textAlign: "center",
});

const summary = css({
  _hover: {
    cursor: "pointer",
  },
});

const link = css({
  _hover: {
    color: "violet.500",
  },
});

const iconLink = cx(
  link,
  css({
    fontSize: "x-large",
  }),
);

const details = css({
  textAlign: "center",
});

const emblem = css({
  w: "16",
  aspectRatio: "1",
  objectFit: "contain",
  rounded: "xl",
});

const schoolInfo = css({
  w: "80",
});

const schooling = css({ w: "full" });

const programInfo = css({
  w: "full",
  justifyContent: "space-between",
  flexDir: {
    mdDown: "column",
    base: "row",
  },
  gap: "0",
});

const list = css({
  listStyle: "outside",
  textAlign: "left",
});

const portrait = css({
  my: "5",
  aspectRatio: "portrait",
  w: {
    base: "64",
    smDown: "full",
  },
});

const demoScreenshot = cx(
  portrait,
  css({
    objectFit: "contain",
  }),
);

const demoImg = cx(
  portrait,
  css({
    objectFit: "cover",
    objectPosition: "top",
  }),
);

const imgStack = css({
  flexWrap: "wrap",
  justifyContent: "center",
});
