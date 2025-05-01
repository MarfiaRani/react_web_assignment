import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/GuaranteeSection.css"; // Custom CSS for styling

// Icons
import deliveryIcon from "../assets/images/delivery.png";
import supportIcon from "../assets/images/support.png";
import moneyBackIcon from "../assets/images/money-back.png";

const guarantees = [
    { icon: deliveryIcon, title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
    { icon: supportIcon, title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
    { icon: moneyBackIcon, title: "MONEY BACK GUARANTEE", description: "We return money within 30 days" },
];

const GuaranteeSection = () => {
    return (
        <div className="container guarantee-container mt-5">
            <div className="row justify-content-center">
                {guarantees.map((item, index) => (
                    <div key={index} className="col-md-4 text-center">
                        <div className="guarantee-card">
                            <img src={item.icon} alt={item.title} className="guarantee-icon" />
                            <h5 className="fw-bold">{item.title}</h5>
                            <p className="text-muted">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuaranteeSection;