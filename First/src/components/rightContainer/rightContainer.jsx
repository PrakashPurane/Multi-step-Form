import React from "react";
import "./rightContainer.css";
import arcadeicon from "../../assets/icon-arcade.svg";
import advancedicon from "../../assets/icon-advanced.svg";
import proicon from "../../assets/icon-pro.svg";
// import arcadeicon from "./assets/icon-arcade.svg";
// import advancedicon from "./assets/icon-arcade.svg";
// import proicon from "./assets/icon-pro.svg";

const rightContainer = ({
  activeStep,
  formData,
  handleInputChange,
  errors,
  isFormValid,
  handleButtonClick,
  handleBackButtonClick,
  togglePosition, // Add togglePosition prop
  handleToggle, // Add setTogglePosition prop
}) => {
  if (!formData) {
    return null; // or any other fallback UI
  }
  return (
    <>
      {activeStep === 1 && (
        <div className="right-container">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <form>
            <div className="input-containers">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <div className="label">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="input-container">
                <label htmlFor="email">Email Address</label>
                <div className="label">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <span className="error email-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="input-container">
                <label htmlFor="phone">Phone Number</label>
                <div className="label">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && (
                    <span className="error phone-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              <button
                className="btn-btn"
                disabled={!isFormValid}
                onClick={() => handleButtonClick(2)}
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      )}

      {activeStep === 2 && (
        <div className="right-container">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or year billing.</p>
          <div className="boxes">
            <div className="first-boxes">
              {togglePosition === "left" ? (
                <>
                  <div className="first-box">
                    <img src={arcadeicon} className="arcadeicon" alt="" />
                    <div className="box-arcade">
                      <h1>Arcade</h1>
                      <p>$9/mo</p>
                    </div>
                  </div>

                  <div className="first-box">
                    <img src={advancedicon} className="advancedicon" alt="" />
                    <div className="box-arcade">
                      <h1>Advanced</h1>
                      <p>$12/mo</p>
                    </div>
                  </div>

                  <div className="first-box">
                    <img src={proicon} className="proicon" alt="" />
                    <div className="box-arcade">
                      <h1>Pro</h1>
                      <p>$15/mo</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="second-box">
                    <img src={arcadeicon} className="arcadeicon" alt="" />
                    <div className="box-arcade">
                      <h1>Arcade</h1>
                      <p>$9/yr</p>
                      <div className="para">
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>

                  <div className="second-box">
                    <img src={advancedicon} className="advancedicon" alt="" />
                    <div className="box-arcade">
                      <h1>Advanced</h1>
                      <p>$120/yr</p>
                      <div className="para">
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>

                  <div className="second-box">
                    <img src={proicon} className="proicon" alt="" />
                    <div className="box-arcade">
                      <h1>Pro</h1>
                      <p>$150/yr</p>
                      <div className="para">
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="toggle-container">
                <span
                  className={`mon ${
                    togglePosition === "left" ? "mon-highlight" : ""
                  }`}
                >
                  Monthly
                </span>
                <label className="switch">
                  <input type="checkbox" onChange={handleToggle} />
                  <span className="slider round"></span>
                </label>
                <span
                  className={`yea ${
                    togglePosition === "right" ? "yea-highlight" : ""
                  }`}
                >
                  Yearly
                </span>
              </div>
            </div>
          </div>
          <button className="btn-btn" onClick={handleButtonClick}>
            Next Step
          </button>

          <button
            className="btn-btn go-back"
            onClick={handleBackButtonClick}
          >
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default rightContainer;
