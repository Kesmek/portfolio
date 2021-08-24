import GraphBar from "src/components/GraphBar";
import RNSVG from "src/assets/react-native.svg";
import NodeJSSVG from "src/assets/nodejs.svg";
import JavaSVG from "src/assets/java.svg";
import MongoDBSVG from "src/assets/mongodb.svg";
import AWSSVG from "src/assets/aws.svg";
import "./styles.css";

const Resume = () => {
  return (
    <div className="column" style={{ width: "100%" }}>
      <h1>Education</h1>
      <div>
        <h3>John Abbott College</h3>
        <ul>
          <li>
            <div className="row range">
              <p>Sciences Program</p>
              <p>2015 - 2017</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>McGill University</h3>
        <ul>
          <li>
            <div className="row range">
              <p>Major Computer Science</p>
              <p>2017 - Present</p>
            </div>
          </li>
          <li>
            <div className="row range">
              <p>Minor Physics</p>
              <p>2017 - 2019</p>
            </div>
          </li>
        </ul>
      </div>
      <h1>Skills</h1>
      <div className="row center">
        <p className="y-label">Proficiency</p>
        <div className="skills">
          <GraphBar title="React.js" percent={50} image={RNSVG} />
          <GraphBar title="Node.js" percent={60} image={NodeJSSVG} />
          <GraphBar title="React Native" percent={85} image={RNSVG} />
          <GraphBar title="Java" percent={45} image={JavaSVG} />
          <GraphBar title="MongoDB" percent={60} image={MongoDBSVG} />
          <GraphBar title="AWS" percent={50} image={AWSSVG} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
