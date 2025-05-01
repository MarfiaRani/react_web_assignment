import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/Categories.css";
import phoneIcon from "../assets/images/Category-CellPhone.png";
import computerIcon from "../assets/images/Category-Computer.png";
import watchIcon from "../assets/images/Category-SmartWatch.png";
import cameraIcon from "../assets/images/Category-Camera.png";
import headphonesIcon from "../assets/images/Category-Headphone.png";
import gamingIcon from "../assets/images/Category-Gamepad.png";
import GuaranteeSection from "./GuaranteeSection"; // Ensure this component exists

const categories = [
    { name: "Phones", icon: phoneIcon },
    { name: "Computers", icon: computerIcon },
    { name: "SmartWatch", icon: watchIcon },
    { name: "Camera", icon: cameraIcon },
    { name: "HeadPhones", icon: headphonesIcon },
    { name: "Gaming", icon: gamingIcon },
];

const BrowseByCategory = () => {
    return (
        <><div className="container my-5">
            <h2 className="text-center fw-bold mb-4">Browse By Category</h2>

            {/* Categories Section */}
            <div className="row justify-content-center">
                {categories.map((category, index) => (
                    <div key={index} className="col-md-4 col-lg-2">
                        <div className="category-card text-center p-3">
                            <img src={category.icon} alt={category.name} className="category-icon" />
                            <p className="fw-semibold mt-2">{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div><GuaranteeSection /></>
    );
};

export default BrowseByCategory;