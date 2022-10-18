import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./card.css?inline";

interface CardProps {
  title: string;
  id?: string;
}

export default component$((props: CardProps) => {
  useStylesScoped$(style);
  const { title, id = title.toLowerCase() } = props;

  return (
    <section id={id}>
      <div class={"card"}>
        <h1>{title}</h1>
        <Slot />
      </div>
    </section>
  );
});
