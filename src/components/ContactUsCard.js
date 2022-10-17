import React from "react";

const ContactUsCard = ({ contact }) => {
  // receiving the contact data through props from the parent component
  return (
    <div className="contactUs__card col-md-6 col-lg-3 px-3 py-2 my-2">
      <div className="card">
        <div className="card-body d-flex flex-column align-items-start">
          {/* contact data title */}
          <div>
            <h6 className="card-subtitle mb-1 text-black fw-thin text-muted">
              {contact.title}
            </h6>
          </div>
          {/* description */}
          <p className="card-text">{contact.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
