import React from "react";
import { contactUsData } from "../resources/contactUsData";
import ContactUsCard from "./ContactUsCard";

const ContactUs = () => {
  return (
    <div className="contactUs__container">
      <div className="contactUs__title">
        <h1>Contact Us</h1>
      </div>
      <div className="contactUs__detail row">
        {contactUsData &&
          contactUsData.map((contact) => <ContactUsCard contact={contact} />)}
      </div>
    </div>
  );
};

export default ContactUs;
