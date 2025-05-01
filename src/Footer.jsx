import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Exclusive */}
                    <div className="col-md-3">
                        <h4 className="fw-bold">Exclusive</h4>
                        <p>Get 10% off your first order</p>
                        <div className="input-group">
                            <input type="email" className="form-control bg-secondary text-white" placeholder="Enter your email" />
                            <button className="btn btn-light">Submit</button>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Support</h5>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>Email: exclusive@gmail.com</p>
                        <p>Phone: +88015-88888-9999</p>
                    </div>

                    {/* Account */}
                    <div className="col-md-2">
                        <h5 className="fw-bold">Account</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">My Account</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Login / Register</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Cart</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Wishlist</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
                        </ul>
                    </div>

                    {/* Quick Link */}
                    <div className="col-md-2">
                        <h5 className="fw-bold">Quick Link</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms Of Use</a></li>
                            <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div className="col-md-2">
                        <h5 className="fw-bold">Download App</h5>
                        <p>Save $3 with App New User Only</p>
                        <div>
                            <img src="qr-code.png" alt="QR Code" className="mb-2" />
                            <div className="d-flex gap-2">
                                <button className="btn btn-light">Google Play</button>
                                <button className="btn btn-light">App Store</button>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className="mt-3">
                            <a href="#" className="text-white me-2">📘</a>
                            <a href="#" className="text-white me-2">🐦</a>
                            <a href="#" className="text-white me-2">📸</a>
                            <a href="#" className="text-white">💼</a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="text-center mt-4">
                    © Copyright Rimel 2022. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;