import React from "react";
import "./rightContainer.css";
import arcadeicon from "../../assets/icon-arcade.svg";
import advancedicon from "../../assets/icon-advanced.svg";
import proicon from "../../assets/icon-pro.svg";

const rightContainer = ({
  activeStep,
  formData,
  handleInputChange,
  errors,
  isFormValid,
  handleButtonClick,
  handleBackButtonClick,
  togglePosition, // Add togglePosition prop
  handleToggle,
  selectedPlan,
  selectedAddOns,
  handlePlanSelect,
  handleAddOnToggle,
  handleChangeBillingCycle,
  selectedPlanPrice,
}) => {
 // Define add-ons data
 const addOnsData = [
  { name: "Online service", monthlyPrice: 1, yearlyPrice: 10 },
  { name: "Larger storage", monthlyPrice: 2, yearlyPrice: 20 },
  { name: "Customizable profile", monthlyPrice: 2, yearlyPrice: 20 },
];

if (!formData) {
  return null; // or any other fallback UI
}

  // Calculate total monthly and yearly prices based on the current billing cycle
  let totalMonthlyPrice = selectedPlanPrice;
    let totalYearlyPrice = selectedPlanPrice;
  // let totalMonthlyPrice = togglePosition === "left" ? selectedPlanPrice : selectedPlanPrice*10;
  // let totalYearlyPrice = togglePosition === "right" ? selectedPlanPrice : selectedPlanPrice*10;
  togglePosition === 'left' ? totalMonthlyPrice = selectedPlanPrice : totalYearlyPrice = selectedPlanPrice;

  selectedAddOns.forEach((addOnName) => {
    const addOn = addOnsData.find((item) => item.name === addOnName);
    if (addOn) {
      // totalMonthlyPrice += togglePosition === "left" ? addOn.monthlyPrice : addOn.yearlyPrice;
      // totalYearlyPrice += togglePosition === "right" ? addOn.yearlyPrice : addOn.monthlyPrice;
      togglePosition === 'left' ? totalMonthlyPrice += addOn.monthlyPrice : totalYearlyPrice += addOn.yearlyPrice 
    }
  });


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
                    placeholder="Stephen King"
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
                    placeholder="stephenking@lorem.com"
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
                    placeholder="e.g. 12345678"
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
                  <div
                    className={`first-box ${
                      selectedPlan === "arcade" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("arcade")}
                  >
                    <img src={arcadeicon} className="arcadeicon" alt="" />
                    <div className="box-arcade">
                      <h1>Arcade</h1>
                      <p>$9/mo</p>
                    </div>
                  </div>

                  <div
                    className={`first-box ${
                      selectedPlan === "advanced" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("advanced")}
                  >
                    <img src={advancedicon} className="advancedicon" alt="" />
                    <div className="box-arcade">
                      <h1>Advanced</h1>
                      <p>$12/mo</p>
                    </div>
                  </div>

                  <div
                    className={`first-box ${
                      selectedPlan === "pro" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("pro")}
                  >
                    <img src={proicon} className="proicon" alt="" />
                    <div className="box-arcade">
                      <h1>Pro</h1>
                      <p>$15/mo</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`second-box ${
                      selectedPlan === "arcade" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("arcade")}
                  >
                    <img src={arcadeicon} className="arcadeicon" alt="" />
                    <div className="box-arcade">
                      <h1>Arcade</h1>
                      <p>$90/yr</p>
                      <div className="para">
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`second-box ${
                      selectedPlan === "advanced" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("advanced")}
                  >
                    <img src={advancedicon} className="advancedicon" alt="" />
                    <div className="box-arcade">
                      <h1>Advanced</h1>
                      <p>$120/yr</p>
                      <div className="para">
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`second-box ${
                      selectedPlan === "pro" ? "selected" : ""
                    }`}
                    onClick={() => handlePlanSelect("pro")}
                  >
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

          <button className="btn-btn go-back" onClick={handleBackButtonClick}>
            Go Back
          </button>
        </div>
      )}

      {activeStep === 3 && (
        <div className="right-container">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          <div className="options">
            {addOnsData.map((addOn, index) => (
              <div className="option" key={index}>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    className="che"
                    checked={selectedAddOns.includes(addOn.name)}
                    onChange={() => handleAddOnToggle(addOn.name)}
                  />
                  <span className="checkmark"></span>
                  <div>
                    <p>{addOn.name}</p>
                    <small>
                      {addOn.name === "Online service"
                        ? "Access to multiplayer games"
                        : addOn.name === "Larger storage"
                        ? "Extra 1TB of cloud save"
                        : "Custom theme on your profile"}
                    </small>
                  </div>
                  <span className="price">
                    {togglePosition === "left"
                      ? `+$${addOn.monthlyPrice}/mo`
                      : `+$${addOn.yearlyPrice}/yr`}
                  </span>
                </label>
              </div>
            ))}
          </div>

          <button className="btn-btn" onClick={handleButtonClick}>
            Next Step
          </button>
          <button className="btn-btn go-back" onClick={handleBackButtonClick}>
            Go Back
          </button>
        </div>
      )}

      {activeStep === 4 && (
        <div className="right-container">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className="finish">
            <div className="finished">
              <div>
                <h1>
                  {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}{" "}
                  ({togglePosition === "left" ? "Monthly" : "Yearly"})
                </h1>
                <small
                  className="change-link"
                  onClick={handleChangeBillingCycle}
                >
                  Change
                </small>
              </div>
              <span className="prices">
                {selectedPlan === "arcade"
                  ? togglePosition === "left"
                    ? "$9/mo"
                    : "$90/yr"
                  : selectedPlan === "advanced"
                  ? togglePosition === "left"
                    ? "$12/mo"
                    : "$120/yr"
                  : selectedPlan === "pro"
                  ? togglePosition === "left"
                    ? "$15/mo"
                    : "$150/yr"
                  : ""}
              </span>
            </div>
            <hr />

            {selectedAddOns.map((addOn, index) => (
              <div className="finishs" key={index}>
                <div>
                  <p>{addOn}</p>
                </div>
                <span className="pricess">
                  {togglePosition === "left"
                    ? `+$${
                        addOnsData.find((item) => item.name === addOn)
                          .monthlyPrice
                      }/mo`
                    : `+$${
                        addOnsData.find((item) => item.name === addOn)
                          .yearlyPrice
                      }/yr`}
                </span>
              </div>
            ))}

            
            <div className="finis">
              <div>
                <p>
                  Total ({togglePosition === "left" ? "per month" : "per year"})
                </p>
              </div>
              <span className="pric">
                {togglePosition === "left"
                  ? `$${totalMonthlyPrice}/mo`
                  : `$${totalYearlyPrice}/yr`}
              </span>
            </div>
          </div>
          <button className="btn-btn confirm" onClick={handleButtonClick}>
            Confirm
          </button>
          <button className="btn-btn go-back" onClick={handleBackButtonClick}>
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default rightContainer;
