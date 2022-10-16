import React, { useState } from "react";

const FormCard = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const handleClick = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="form__container">
      {toggleForm ? (
        <div className="px-4 formCard__form stepper1">
          <h4 className="formCard__title">Lorem Ipsum is simply dummy</h4>
          <p className="formCard__sub-title">
            text of the printing and typesetting industry
          </p>
          <div className="formCard__form-Wrapper p-4">
            <select
              type="text"
              placeholder="Name of the Industry"
              className="col-12 mb-3 bg-white text-muted"
            >
              <option value="">Industry Name</option>
            </select>
            <div className="d-flex justify-content-between stepper1__input">
              <input
                type="text"
                placeholder="Invoice Value"
                className="mb-3 bg-white stepper1__input-field"
              />
              <input
                type="text"
                placeholder="Tenure"
                className="mb-3 bg-white stepper1__input-field"
              />
            </div>
          </div>

          <div className="footerCard__btn">
            <p
              style={{
                border: "1px solid #00cdc6",
                color: " #00cdc6",
                textAlign: "right",
              }}
              className="d-flex align-items-center formCard__next-btn px-4 py-2"
              onClick={handleClick}
            >
              Next<i class="ri-arrow-right-line mx-2 fw-semibold"></i>
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="form__image d-flex justify-content-center">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_m9fz64i8.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              autoplay
            ></lottie-player>
          </div>
          <div className="px-4 formCard__form">
            <input
              type="text"
              placeholder="Name of the Industry"
              className="col-12 mb-3"
            />
            <input
              type="text"
              placeholder="Name of the Individual"
              className="col-12 mb-3"
            />
            <input
              type="email"
              placeholder="Name of the Industry"
              className="col-12 mb-3"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="col-12 mb-3"
            />
            <div className="footerCard__btn">
              <p
                className="d-flex align-items-center formCard__previous-btn"
                onClick={handleClick}
              >
                <i class="ri-arrow-left-s-line fw-semibold"></i>previous
              </p>
              <p className="d-flex align-items-center bg-black text-white formCard__next-btn px-4 py-2">
                Submit <i class="ri-arrow-right-line mx-2 fw-semibold"></i>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormCard;
