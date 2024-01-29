import React from "react";
import contact from "../assets/contact.jpg";
import "../styles/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact">
      <div className="alm">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Your Name" type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Email Address" type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Submit</button>
          </form>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Contact;
