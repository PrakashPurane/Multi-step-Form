import React, { useState } from "react";
import arcadeicon from "./assets/icon-arcade.svg";
import advancedicon from "./assets/icon-arcade.svg";
import proicon from "./assets/icon-pro.svg";
import "./App.css";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [emailError, setEmailError] = useState("");
  const [togglePosition, setTogglePosition] = useState("left");

  const handleButtonClick = () => {
    setActiveStep((prevStep) => (prevStep === 4 ? 1 : prevStep + 1));
  };

  const handleToggle = () => {
    setTogglePosition((prevPosition) =>
      prevPosition === "left" ? "right" : "left"
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.email.value;
    if (!validateEmail(emailInput)) {
      setEmailError("The email address is not formatted correctly");
    } else {
      setEmailError("");
      // Proceed to the next step or handle form submission
      handleButtonClick();
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="left-first">
            <div className="left-listing">
              <div className="button">
                <button
                  className={`num ${activeStep === 1 ? "active" : ""}`}
                  onClick={() => setActiveStep(1)}
                >
                  1
                </button>
              </div>
              <div className="details">
                <p>STEP 1</p>
                <h1>YOUR INFO</h1>
              </div>
            </div>
          </div>

          <div className="left-second">
            <div className="left-listing">
              <div className="button">
                <button
                  className={`num ${activeStep === 2 ? "active" : ""}`}
                  onClick={() => setActiveStep(2)}
                >
                  2
                </button>
              </div>
              <div className="details">
                <p>STEP 2</p>
                <h1>SELECT PLAN</h1>
              </div>
            </div>
          </div>

          <div className="left-third">
            <div className="left-listing">
              <div className="button">
                <button
                  className={`num ${activeStep === 3 ? "active" : ""}`}
                  onClick={() => setActiveStep(3)}
                >
                  3
                </button>
              </div>
              <div className="details">
                <p>STEP 3</p>
                <h1>ADD-ONS</h1>
              </div>
            </div>
          </div>

          <div className="left-fourth">
            <div className="left-listing">
              <div className="button">
                <button
                  className={`num ${activeStep === 4 ? "active" : ""}`}
                  onClick={() => setActiveStep(4)}
                >
                  4
                </button>
              </div>
              <div className="details">
                <p>STEP 4</p>
                <h1>SUMMARY</h1>
              </div>
              {/* <img src={desktopbg} alt="" className="desktopbg" /> */}
            </div>
          </div>
        </div>

        {/* Right container */}
        {activeStep === 1 && (
          <div className="right-container">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form action="#">
              <div className="input-containers">
                <div className="input-container">
                  <label htmlFor="text">Name</label>
                  <div className="label">
                    <input
                      type="text"
                      id="text"
                      placeholder="e.g. Stephen King"
                    />
                  </div>
                </div>

                <div className="input-container">
                  <label htmlFor="email">Email Address</label>
                  <div className="label">
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. stephenking@lorem.com"
                      required
                    />
                    {emailError && <p className="error">{emailError}</p>}
                  </div>
                </div>

                <div className="input-container">
                  <label htmlFor="tel">Phone Number</label>
                  <div className="label">
                    <input
                      type="tel"
                      id="tel"
                      placeholder="e.g. +1 234 567 890"
                      required
                    />
                  </div>
                </div>

                <button className="btn" onClick={handleButtonClick}>
                  Next Step
                </button>
              </div>
            </form>
          </div>
        )}  

        {/* {activeStep === 2 && (
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
                        <p2>2 months free</p2>
                      </div>
                    </div>

                    <div className="second-box">
                      <img src={advancedicon} className="advancedicon" alt="" />
                      <div className="box-arcade">
                        <h1>Advanced</h1>
                        <p>$120/yr</p>
                        <p2>2 months free</p2>
                      </div>
                    </div>

                    <div className="second-box">
                      <img src={proicon} className="proicon" alt="" />
                      <div className="box-arcade">
                        <h1>Pro</h1>
                        <p>$150/yr</p>
                        <p2>2 months free</p2>
                      </div>
                    </div>
                  </>
                )}
                <div className="toggle-container">
                  <span
                    className={`mon ${
                      togglePosition === "right" ? "mon-highlight" : ""
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
                      togglePosition === "left" ? "yea-highlight" : ""
                    }`}
                  >
                    Yearly
                  </span>
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleButtonClick}>
              Next Step
            </button>
          </div>
        )} */}
      </div>
    </>
  );
}

export default App;
