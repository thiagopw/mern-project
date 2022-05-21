import logo from "../assets/images/logo.svg";
import main from "../assets/images/portfolio_her.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Repo</span>
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
    </Wrapper>
  );
};

export default Landing;
