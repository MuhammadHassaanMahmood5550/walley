import {Link} from "react-router-dom";
// import {useParams} from "react-router-dom";
  

const Navbar = (props) => {
  // const {id} = useParams();
  // console.log('====================================');
  // console.log(id);
  // console.log('====================================');
    return (
        <div className="parent_navbar">
                <div className="for_navbar">
      <nav className="navbar navbar-expand-lg navbar-dark for_sm">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    { props.home == "home" ? 
      <li class="nav-item">
       <Link to="/" class="nav-link mr-5 h4  act">HOME</Link> 
      </li> : <li class="nav-item">
       <Link to="/" class="nav-link mr-5 h4 act2">HOME</Link> 
      </li> 
       }

       { props.about == "about" ? 
      <li class="nav-item">
         <Link to="/aboutt" class="nav-link mr-5 h4  act">ABOUT</Link>
      </li> :  <li class="nav-item">
         <Link to="/aboutt" class="nav-link mr-5 h4  act2">ABOUT</Link>
      </li>
       }

        { props.services == "services" ? 
      <li class="nav-item">
         <Link to="/services" class="nav-link mr-5 h4  act">SERVICES</Link>
      </li> :  <li class="nav-item">
         <Link to="/services" class="nav-link mr-5 h4 act2">SERVICES</Link>
      </li>
       }

        { props.contact == "contact" ? 
      <li class="nav-item">
         <Link to="/contact" class="nav-link mr-5 h4 act">CONTACT</Link>
      </li> :  <li class="nav-item">
         <Link to="/contact" class="nav-link mr-5 h4 act2">CONTACT</Link>
      </li>
       }


     
   
    </ul>
  </div>
</nav>
        </div>
        </div>
     );
}
 
export default Navbar;