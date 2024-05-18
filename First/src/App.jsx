import React, { useState } from 'react';
import "./App.css";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleButtonClick = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="left-first">
            <div className="left-listing">
              <div className="button">
                <button
                  className={`num ${activeStep === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
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
                  className={`num ${activeStep === 2 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(2)}
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
                  className={`num ${activeStep === 3 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(3)}
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
                  className={`num ${activeStep === 4 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(4)}
                >
                  4
                </button>
              </div>
              <div className="details">
                <p>STEP 4</p>
                <h1>SUMMARY</h1>
              </div>
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
                    <input type="text" id="text" />
                  </div>
                </div>

                <div className="input-container">
                  <label htmlFor="email">Email Address</label>
                  <div className="label">
                    <input type="email" id="email" />
                  </div>
                </div>

                <div className="input-container">
                  <label htmlFor="tel">Phone Number</label>
                  <div className="label">
                    <input type="tel" id="tel" required />
                  </div>
                </div>

                <button className="btn">Next Step</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
