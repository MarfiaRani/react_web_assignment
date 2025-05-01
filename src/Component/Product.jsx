// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Component/Product.css"; // Custom CSS for styling

// import northCoat from "../assets/images/cart1.png";
// import gucciBag from "../assets/images/cart2.png";
// import cpuCooler from "../assets/images/cart3.png";
// import bookshelf from "../assets/images/cart4.png";

//  const products = [
//   { id: 1, name: "The North Coat", price: "$260", rating: 5, img: northCoat },
//   { id: 2, name: "Gucci Duffle Bag", price: "$960", rating: 5, img: gucciBag },
//   { id: 3, name: "RGB Liquid Cooler", price: "$160", rating: 5, img: cpuCooler },
//   { id: 4, name: "Small Bookshelf", price: "$360", rating: 5, img: bookshelf },
// ];

//  export const Product = () => {
//   return (
//     <div className="container my-5">
//       <h2 className="fw-bold text-center">Best Selling Products</h2>

//       <div className="row mt-4">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-3">
//             <div className="card p-3 shadow-lg" style={{ minHeight: "350px" }}> {/* Increased height */}
//               <img src={product.img} alt={product.name} className="img-fluid rounded" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//               <h4 className="mt-3">{product.name}</h4>
//               <p className="text-danger fw-bold">{product.price}</p>
//               <p>{"★".repeat(product.rating)}</p>
//             </div>
//             <div className="text-center mt-2">
//               <button className="btn btn-primary">Add to Cart</button>
//             
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/Product.css"; // Custom CSS for styling

import northCoat from "../assets/images/cart1.png";
import gucciBag from "../assets/images/cart2.png";
import cpuCooler from "../assets/images/cart3.png";
import bookshelf from "../assets/images/cart4.png";
import smartwatch from "../assets/images/cart1.png";
import sneakers from "../assets/images/cart2.png";
import headphones from "../assets/images/cart3.png";
import jacket from "../assets/images/cart4.png";

const products = [
  { id: 1, name: "The North Coat", price: "$260", rating: 5, img: northCoat },
  { id: 2, name: "Gucci Duffle Bag", price: "$960", rating: 5, img: gucciBag },
  { id: 3, name: "RGB Liquid Cooler", price: "$160", rating: 5, img: cpuCooler },
  { id: 4, name: "Small Bookshelf", price: "$360", rating: 5, img: bookshelf },
  { id: 5, name: "Smart Watch", price: "$190", rating: 4, img: smartwatch },
  { id: 6, name: "Nike Sneakers", price: "$120", rating: 5, img: sneakers },
  { id: 7, name: "Bluetooth Headphones", price: "$150", rating: 4, img: headphones },
  { id: 8, name: "Winter Jacket", price: "$220", rating: 5, img: jacket },
];

export const Product = () => {
  const [loading, setLoading] = useState(true);

  // Simulating Loader with Timeout
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // 2 seconds loader
  }, []);

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center">Best Selling Products</h2>

      {/* Show Loader While Loading */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row mt-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="card p-3 shadow-lg" style={{ minHeight: "380px" }}> {/* Increased height */}
                <img src={product.img} alt={product.name} className="img-fluid rounded" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <h4 className="mt-3">{product.name}</h4>
                <p className="text-danger fw-bold">{product.price}</p>
                <p>{"★".repeat(product.rating)}</p>
                <button className="btn btn-primary mt-3">Add to Cart</button> {/* Button inside card */}
              </div>
            </div>
            
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Product;