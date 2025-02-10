import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">MEET OUR TEAMS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Electrical" img="deprecated.png" text="Specializing in Power Distribution, Battery Management, Electronics Integration, Embedded Systems, and Control Systems " />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Mechanical" img="deprecated.png" text="Specializing in Propulsion Systems, Hull Design, Waterproofing, and Integration" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Software" img="deprecated.png" text="Specializing in Sensor and Image Processing, Computer Vision Algorithms, and Web Development" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Marketing" img="deprecated.png" text="Specializes in Budgeting, Finances, Social Media, and Events" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
