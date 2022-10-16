import React from "react";

const ContactUsCard = ({ contact }) => {
  return (
    <div className="contactUs__card col-md-3 px-3 py-2 my-4">
      <div className="card">
        <div className="card-body d-flex flex-column align-items-start mb-4">
          <div>
            <h6 className="card-subtitle mb-1 text-black fw-thin text-muted">
              {contact.title}
            </h6>
          </div>
          <p className="card-text">{contact.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
