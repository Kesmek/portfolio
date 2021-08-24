import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "../Anchor";
import "./styles.css";

type Props = {
  nextSection: string;
};

const NextButton = ({ nextSection }: Props) => (
  <div className="next-section">
    <Anchor href={`#${nextSection}`} target="_self">
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
    </Anchor>
  </div>
);

export default NextButton;
