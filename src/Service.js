import Navbar from "./Navbar";

const Service = () => {
  return (
    <div id="service">
      <Navbar services={"services"}></Navbar>
      <div className="services-content">
             <div className="container">
<div className="row justify-content-md-end justify-content-center">
                 <div className="col">

                    <h4 className="mb-5" style={{marginTop: "65px"}}>Diagoona Template Services</h4>
              <div className="my-4 horitontal_row"></div>

<div 
className=
"d-flex flex-row flex-wrap flex-xl-nowrap mb-xl-5 ">
                <div className="mx-4 my-2">
                  <img src={require("./img/services-1.jpg").default} alt="" />
                </div>
                <div className="mx-4 my-2">
                  <p className="lead">Cras quam urna, interdum at posuere on tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>

              <div className="d-flex flex-row-reverse flex-wrap flex-xl-nowrap mb-xl-5">
                <div className="mx-4 my-2">
                <img src={require("./img/services-2.jpg").default} alt="" />
                </div>
                <div className="mx-4 my-2">
                  <p className="lead">Cras quam urna, interdum at posuere at tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>

              <div className="d-flex flex-row flex-wrap flex-xl-nowrap mb-xl-5">
                <div className="mx-4 my-2 ser_hide">
                  <img src={require("./img/services-3.jpg").default} alt="" />
                </div>
                <div className="mx-4 my-2 ser_hide">
                 <p className="lead">Cras quam urna, interdum at posuere t tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>
              {/* d-none d-xl-block
d-none d-xl-block */}

                 </div>
               </div>
             </div>
     </div>
    </div>
  );
};

export default Service;
