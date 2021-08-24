import "./styles.css";

type Props = {
  title: string;
  percent: number;
  image: string;
};

const GraphBar = ({ title, percent, image }: Props) => {
  return (
    <div className="barContainer">
      <div
        className="bar"
        style={{
          height: `${percent}%`,
        }}
      >
        <img src={image} alt={title} className="icon" />
        <p className="center-text">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

export default GraphBar;
