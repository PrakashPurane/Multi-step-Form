import React from 'react'
import './leftContainer.css'

const leftContainer =  ({ activeStep, handleButtonClick }) => {
  return (
    <>
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
     
      
    </>
  )
}

export default leftContainer
