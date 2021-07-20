import Navbar from "./Navbar";

const HomeContent = () => {
  return (
    <div id="homeContent">
         <Navbar home={"home"}></Navbar>
         
      <div className="home_content">
        <div className="container">
          <div className="row justify-content-lg-end justify-content-center">
            <div className="col">
              <h4 className="mb-5" style={{ marginTop: "65px" }}>
                Diagoona HTML Template
              </h4>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nulla dolores in voluptas obcaecati aliquid, aperiam ab.
                Est ducimus quo maiores voluptates. Eos illo architecto.
                tempora qui mollitia odit, officia repudiandae.
              </p>
              <div className="my-5 horitontal_row"></div>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nulla dolores in voluptas obcaecati aliquid, aperiam ab.
                Est ducimus quo maiores voluptates. Eos illo architecto.
              </p>
              <button className="btn btn-light btn-lg mt-3 px-4">
                Continue...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
