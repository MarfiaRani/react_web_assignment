import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // New state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Disable button

    // Simulating submission delay (2 sec)
    setTimeout(() => {
      console.log("Form Submitted:", formData); // Print data to console
      setIsSubmitting(false); // Re-enable button
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section - Contact Information */}
        <div className="col-md-4">
          <div className="contact-info">
            <div className="info-item d-flex align-items-center mb-4">
              <i className="fas fa-phone-alt fa-2x text-danger me-3"></i>
              <div>
                <h4>Call To Us</h4>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611122222</p>
              </div>
            </div>
            <div className="info-item d-flex align-items-center">
              <i className="fas fa-envelope fa-2x text-danger me-3"></i>
              <div>
                <h4>Write To Us</h4>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-8">
          <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name *</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Your Phone *</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};