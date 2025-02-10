//import { Link } from "react-scroll";

function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>McMaster RoboSub 2025</h1>
      {/* <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          <Link
            //onClick={openBar}
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
          >
            Sign Up
          </Link>
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          <Link
            //onClick={openBar}
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Learn More
          </Link>
        </button>
      </div> */}

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
