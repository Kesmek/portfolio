import { AnchorHTMLAttributes, useState } from "react";
import "./styles.css";

type Props = {
  textHoverColor?: string;
  focused?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor = ({
  children,
  href,
  target = "_blank",
  rel = "noreferrer",
  textHoverColor = "slateblue",
  focused = false,
}: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      className="button"
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover || focused ? textHoverColor : "black",
      }}
    >
      {children}
    </a>
  );
};

export default Anchor;
