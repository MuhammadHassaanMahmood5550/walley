import Navbar from "./Navbar";

const Aboutt = () => {
    return ( 
        <div id="aboutt">
          <Navbar about={"about"}></Navbar>
            <div className="about_content">
             <div className="container">
               <div className="row justify-content-md-end justify-content-center">
                 <div className="col">

             <h4 className="mb-5" style={{marginTop: "65px"}}>About Diagoona Template</h4>
              <div className="my-4 horitontal_row"></div>

              <div className="d-flex flex row">
                <div className="mx-4 my-2">
                  <i className="fas fa-home fa-4x mt-2"></i>
                </div>
                <div className="mx-4 my-2">
                  <p className="lead">Cras quam urna, interdum at posuere on tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>

              <div className="d-flex flex row">
                <div className="mx-4 my-2">
                   <i className="fas fa-folder fa-4x mt-2"></i>
                </div>
                <div className="mx-4 my-2">
                  <p className="lead">Cras quam urna, interdum at posuere at tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>

              <div className="d-flex flex row">
                <div className="mx-4 my-2">
                   <i className="fas fa-search fa-4x mt-2"></i>
                </div>
                <div className="mx-4 my-2">
                 <p className="lead">Cras quam urna, interdum at posuere t tincidunt  ut ipsum. Nam condimentum placerat enim. Nullam sapien.</p>
                </div>
              </div>
                 </div>
               </div>
             </div>
     </div>
     
        </div>
     );
}
 
export default Aboutt;