import Navbar from "./Navbar";
import Footer from "./Footer";


const Home = () => {
  
  return (
    <div id="home">
      {/* ---------------------Navbar----------------- */}
      {/* <Navbar></Navbar> */}

      {/* ---------------------Home content----------------- */}
      {/* <HomeContent></HomeContent> */}

      {/* ---------------------About content----------------- */}
      {/* <Aboutt></Aboutt> */}

      {/* ---------------------footer----------------- */}
      <Footer></Footer>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol
          class="carousel-indicators indicator-size"
          style={{ marginRight: "68%", marginBottom: "27rem" }}
        >
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
            style={{ width: "1rem", height: "1rem" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            style={{ width: "1rem", height: "1rem" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            style={{ width: "1rem", height: "1rem" }}
          ></li>
        </ol>

        <div class="dark-overlay">
          <div class="img1"></div>
        </div>

    
        <div class="content ml-4 text-white">
          <i
            class="fas fa-umbrella-beach fa-3x ml-5 tm-logo"
            style={{ marginTop: "33px" }}
          ></i>
          <h1 class="ml-5" style={{ fontSize: "2.5rem", fontWeight: "400" }}>
            DIAGOONA
          </h1>
          <p class="ml-5" style={{ fontSize: "20px", fontWeight: "100", 
          marginTop: "-10px" }}>
            new diagoona template
          </p>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active item">
            <img
              src={require("./img/diagoona-bg-1.jpg").default}
              class="d-block for_size"
              style={{ width: "100vw", height: "1050px", objectFit: "fill" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("./img/diagoona-bg-2.jpg").default}
              class="d-block  for_size"
              style={{ width: "100vw", height: "1050px" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("./img/diagoona-bg-3.jpg").default}
              class="d-block  for_size"
              style={{ width: "100vw", height: "1050px" }}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
