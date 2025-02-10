function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/deprecated.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Our up and coming McMaster technical team specializes in designing, building, and testing an Autonomous Underwater Vehicle 
              to compete in the annual RoboSub Competition hosted by RoboNation. We promote innovation, problem-solving, and hands-on 
              engineering experience through our club! Check out our individual sub-team pages for more information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
