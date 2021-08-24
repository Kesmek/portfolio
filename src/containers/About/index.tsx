import "./styles.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        I'm a junior software developer with experience primarily developing
        cross-platform mobile applications, and I'm currently working with web
        development as well. For mobile development I've used React Native on
        the front-end alongside MongoDB and Amazon Web Services (Cognito, API
        Gateway, and Lambda) on the back-end. For web development I am actively
        working with React.js and Typescript to create performant web
        applications. I also have some experience working with Java, MySQL, and
        C++. I have a particular interest in creating/optimizing performant
        apps, and actively seek ways of improving my skills with those goals in
        mind. Obviously my favorite color is purple.
      </p>
      <p className="contact">
        <strong>Contact Information</strong>
        <br />
        Justin Scopelleti
        <br />
        514-754-1427
        <br />
        <a href="mailto:justin.scopelleti@gmail.com">
          justin.scopelleti@gmail.com
        </a>
      </p>
    </div>
  );
};

export default About;
