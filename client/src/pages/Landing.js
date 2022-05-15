import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
const Landing = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby raclette enamel pin occupy literally lomo normcore cray
            twee kickstarter bushwick listicle 3 wolf moon cred church-key pork
            belly.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </div>
  );
};

export default Landing;
