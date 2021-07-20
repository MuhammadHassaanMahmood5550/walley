import Navbar from "./Navbar";

const Contact = () => {   
  return (
    <div id="contact">
        <Navbar contact={"contact"}></Navbar>
      <div className="contact_content">
        <div className="container">
          <div className="row justify-content-md-end justify-content-center ">
            <div className="col">
              <h4 className="mb-4" style={{ marginTop: "65px" }}>
                Contact Us
              </h4>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nulla dolores in voluptas obcaecati aliquid, aperiam ab.
                tempora qui mollitia odit, officia repudiandae.
              </p>

              <form className="mt-5" action="">
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                   <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                   <div className="form-group">
                     <textarea cols="6" rows="5" className="form-control" 
                     placeholder="Message..."></textarea>
                  </div>
                   <button className="btn btn-light btn-lg mt-3 px-5 float-md-right">Send It</button>
                  

              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
