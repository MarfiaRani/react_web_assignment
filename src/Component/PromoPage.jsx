import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/PromoPage.css"; // Custom CSS for styling
import GuaranteeSection from "./GuaranteeSection"; // Ensure this component exists

import jblSpeaker from "../assets/images/Frame.png"; // Ensure this image exists

const PromoBanner = () => {
    return (
        <div className="container promo-container">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-md-6">
                  
                    <h3 className="fw-bold text-white">Enhance Your Music Experience</h3>
                    <img src={jblSpeaker} alt="JBL Speaker" className="promo-image" />
                </div>
            </div>
            <br />
            <>
            < GuaranteeSection/>
            </>
        </div>
    );
};

export default PromoBanner;