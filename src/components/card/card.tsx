import {
  component$,
  Slot,
  useStyles$,
  useStylesScoped$
} from "@builder.io/qwik";
import style, { card, section } from "./card.css";
import globalStyle from "~/globalStyles.css";

interface CardProps {
  title: string;
  id?: string;
}

export default component$((props: CardProps) => {
  useStylesScoped$(style);
  useStyles$(globalStyle);
  const {
    title,
    id = title.toLowerCase()
  } = props;

  return (
    <section id={id} class={section}>
      <div class={card}>
        <h1>{title}</h1>
        <Slot/>
      </div>
    </section>
  );
});
