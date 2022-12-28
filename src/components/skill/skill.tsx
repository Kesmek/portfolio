import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles, { bar, container, icon, skill } from "./skill.css";

interface SkillProps {
  title: string;
  source: string;
  description: string;
  experiencePercentage: number;
  barColor: string;
}

export default component$((props: SkillProps) => {
  useStylesScoped$(styles);
  const {
    source,
    experiencePercentage,
    description,
    barColor,
    title
  } = props;

  return (
    <div class={skill}>
      <i class={[source, icon]} title={title}/>
      <div class={container}>
        <span>{description}</span>
        <div
          class={bar}
          style={`width: ${experiencePercentage}%; background-color: ${barColor}`}
        />
      </div>
    </div>
  );
});
