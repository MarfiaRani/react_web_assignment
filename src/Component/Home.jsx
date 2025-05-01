import React from "react";
import BrowseByCategory from "./Categories";
import BestSellingProducts from "./BestSellingProducts";
import Cart1 from "../assets/images/Cart (1).png";
import Cart2 from "../assets/images/Cart (2).png";
import Cart3 from "../assets/images/Cart (3).png";
import PromoPage from "./PromoPage";

export const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/assets/images/banner.png" className="d-block w-100" alt="Banner" />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/banner.png" className="d-block w-100" alt="Banner" />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/banner.png" className="d-block w-100" alt="Banner" />
          </div>
        </div>
      </div>

      {/* Browse By Category Section */}
      <BrowseByCategory />
<br></br>
    {/* Best Selling Products Section */}
<BestSellingProducts/>
<br></br>
{/*Promo Section*/}
<PromoPage/>
  



      
      {/* <div className="container">
        <h2 className="text-center my-4">Featured Content</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card mb-4">
              <img src={Cart1} className="card-img-top" alt="Cart 1" />
              <div className="card-body">
                <h5 className="card-title">Exclusive Cart 1</h5>
                <p className="card-text">Description of Cart 1.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card mb-4">
              <img src={Cart2} className="card-img-top" alt="Cart 2" />
              <div className="card-body">
                <h5 className="card-title">Exclusive Cart 2</h5>
                <p className="card-text">Description of Cart 2.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card mb-4">
              <img src={Cart3} className="card-img-top" alt="Cart 3" />
              <div className="card-body">
                <h5 className="card-title">Exclusive Cart 3</h5>
                <p className="card-text">Description of Cart 3.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;