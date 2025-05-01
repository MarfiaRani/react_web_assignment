// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar = () => {
//     return (
//         <>
//             {/* Top Banner */}
//             <div className="bg-dark text-white text-center py-2">
//                 Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//             </div>

//             {/* Main Navbar */}
//             <nav className="navbar navbar-expand-lg bg-white px-4 shadow-sm">
//                 <div className="container-fluid">
//                     <a className="navbar-brand fw-bold fs-4" href="#">Exclusive</a>

//                     {/* Toggle Button for Mobile View */}
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     {/* Navbar Links */}
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav mx-auto">
//                             <li className="nav-item"><a className="nav-link fw-semibold" href="#">Home</a></li>
//                             <li className="nav-item"><a className="nav-link fw-semibold" href="#">Contact</a></li>
//                             <li className="nav-item"><a className="nav-link fw-semibold" href="#">About</a></li>
//                             <li className="nav-item"><a className="nav-link fw-semibold" href="#">Sign Up</a></li>
//                         </ul>
//                     </div>

//                     {/* Search & Cart Section */}
//                     <div className="d-flex align-items-center">
//                         <input type="text" className="form-control me-2" placeholder="What are you looking for?" />
//                         <button className="btn btn-outline-secondary">🔍</button>
//                         <button className="btn btn-outline-dark ms-2">🛒</button>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="bg-dark text-white text-center py-2">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>

            <nav className="navbar navbar-expand-lg bg-white px-4 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/">Exclusive</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><Link className="nav-link fw-semibold" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-semibold" to="/product">Products</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-semibold" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-semibold" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-semibold" to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <input type="text" className="form-control me-2" placeholder="What are you looking for?" />
                        <button className="btn btn-outline-secondary">🔍</button>
                        <button className="btn btn-outline-dark ms-2">🛒</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
