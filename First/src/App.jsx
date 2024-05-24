import React, { useState, useEffect } from "react";
import LeftContainer from "./components/leftContainer/leftContainer";
import RightContainer from "./components/rightContainer/rightContainer";
import ThankYou from "./components/ThankYou/ThankYou";

import "./App.css";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [togglePosition, setTogglePosition] = useState("left");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  // console.log(isFormValid)
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [showThankYou, setShowThankYou] = useState(false); // Flag to control rendering of ThankYouMessage


  

  const handleButtonClick = () => {
    if (activeStep === 2 && !selectedPlan) {
      alert("Please select a plan to proceed.");
      return;
    }
    setActiveStep((prevStep) => Math.min(prevStep + 1, 5)); // Ensure it doesn't exceed 5
    if (activeStep === 4) {
      setShowThankYou(true); // Show Thank You message when reaching step 4
    }
  };

  const handleBackButtonClick = () => {
    setActiveStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    // Validate email and phone formats
    if (id === "email") {
      validateEmail(value);
    } else if (id === "phone") {
      validatePhone(value);
    }
  };

  const handleToggle = () => {
    setTogglePosition((prevPosition) =>
      prevPosition === "left" ? "right" : "left"
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{1,10}$/; // E.164 international format
    if (!phoneRegex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number must be 10 digits",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }
  };

  useEffect(() => {
    const { name, email, phone } = formData;
    const isValid =
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      errors.email === "" &&
      errors.phone === "";
    setIsFormValid(isValid);
  }, [formData, errors]);

  const handlePlanSelect = (plan) => {
    let price;
    switch (plan) {
      case 'arcade':
        price = togglePosition === 'left' ? 9 : 90;
        break;
      case 'advanced':
        price = togglePosition === 'left' ? 12 : 120;
        break;
      case 'pro':
        price = togglePosition === 'left' ? 15 : 150;
        break;
      default:
        price = 0;
    }
    setSelectedPlan(plan);
    setSelectedPlanPrice(price);
  };

  const handleAddOnToggle = (addOn) => {
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter((item) => item !== addOn)
        : [...prevAddOns, addOn]
    );
  };


  const handleChangeBillingCycle = () => {
    setTogglePosition((prevPosition) => {
      const newPosition = prevPosition === "left" ? "right" : "left";
      if (selectedPlan) {
        const priceMap = {
          arcade: { left: 9, right: 90 },
          advanced: { left: 12, right: 120 },
          pro: { left: 15, right: 150 },
        };
        const newPrice = priceMap[selectedPlan][newPosition];
        setSelectedPlanPrice(newPrice);
      }
      return newPosition;
    });
  };
  

  

  return (
    <>
      <div className="container">
        <LeftContainer
          activeStep={activeStep}
          handleButtonClick={handleButtonClick}
        />
        <RightContainer
          activeStep={activeStep}
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
          isFormValid={isFormValid}
          handleButtonClick={handleButtonClick}
          handleBackButtonClick={handleBackButtonClick}
          togglePosition={togglePosition} // Pass togglePosition prop
          handleToggle={handleToggle}
          selectedPlan={selectedPlan} // Pass selectedPlan
          setSelectedPlan={setSelectedPlan}
          selectedAddOns={selectedAddOns} // Pass selectedAddOns
          setSelectedAddOns={setSelectedAddOns}
          handlePlanSelect={handlePlanSelect} 
          handleAddOnToggle={handleAddOnToggle}
          handleChangeBillingCycle={handleChangeBillingCycle}
          selectedPlanPrice={selectedPlanPrice}
        />
        {showThankYou && <ThankYou />}
      </div>
    </>
  );
}

export default App;
