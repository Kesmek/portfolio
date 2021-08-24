import { AnchorHTMLAttributes, useState } from "react";
import classNames from "classnames";
import "./styles.css";

type Props = {
  textHoverColor?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor = ({
  children,
  href,
  target = "_blank",
  rel = "noreferrer",
  textHoverColor = "slateblue",
}: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      className={classNames("button", {
        hover: hover,
      })}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover ? textHoverColor : "black",
      }}
    >
      {children}
    </a>
  );
};

export default Anchor;
