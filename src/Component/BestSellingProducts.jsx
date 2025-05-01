import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/BestSellingProducts.css"; // Custom CSS for styling

// Product Images
import northCoat from "../assets/images/cart1.png";
import gucciBag from "../assets/images/cart2.png";
import cpuCooler from "../assets/images/cart3.png";
import bookshelf from "../assets/images/cart4.png";

// Product Data
const products = [
    { name: "The North Coat", price: "$260", rating: 5, image: northCoat },
    { name: "Gucci Duffle Bag", price: "$960", rating: 4.5, image: gucciBag },
    { name: "RGB Liquid CPU Cooler", price: "$160", rating: 4, image: cpuCooler },
    { name: "Small Bookshelf", price: "$360", rating: 5, image: bookshelf },
];

const BestSellingProducts = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold">Best Selling Products</h2>

            <div className="row justify-content-center">
                {products.map((product, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="product-card text-center p-3">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h5 className="fw-semibold mt-2">{product.name}</h5>
                            <p className="text-muted">{product.price}</p>
                            <p className="text-warning">{"⭐".repeat(product.rating)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered View All Button */}
            <br />
            <div className="text-center mt-4">
                <button className="btn btn-primary view-all-btn">View All</button>
            </div>
        </div>
    );
};

export default BestSellingProducts;