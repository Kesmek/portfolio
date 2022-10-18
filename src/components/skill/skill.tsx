import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skill.css?inline";

interface SkillProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  experiencePercentage: number;
  barColor: string;
}

export default component$((props: SkillProps) => {
  useStylesScoped$(styles);
  const {
    imageSrc,
    imageAlt,
    experiencePercentage,
    description,
    barColor,
    title,
  } = props;

  return (
    <div className={"row skill"}>
      <img src={imageSrc} className={"icon"} alt={imageAlt} title={title} />
      <div class={"container"}>
        <span>{description}</span>
        <div
          className={"bar"}
          style={`width: ${experiencePercentage}%; background-color: ${barColor}`}
        />
      </div>
    </div>
  );
});
