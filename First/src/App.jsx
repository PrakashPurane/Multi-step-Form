import React, { useState, useEffect } from 'react';
import LeftContainer from './components/leftContainer/leftContainer';
import RightContainer from './components/rightContainer/rightContainer';

import "./App.css";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [togglePosition, setTogglePosition] = useState("left");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  // console.log(isFormValid)
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const handleButtonClick = (step) => {
    setActiveStep(step);
  };


  const handleBackButtonClick = () => {
    setActiveStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });


    // Validate email and phone formats
    if (id === 'email') {
      validateEmail(value);
    }
    if (id === 'phone') {
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
        email: 'Invalid email format'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }));
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{1,10}$/;// E.164 international format
    if (!phoneRegex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
       phone: 'Phone number must be 10 digits'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: ''
      }));
    }
  };

  useEffect(() => {
    const { name, email, phone } = formData;
    const isValid =
      name !== '' &&
      email !== '' &&
      phone !== '' &&
      errors.email === '' &&
      errors.phone === '';
    setIsFormValid(isValid);
  }, [formData, errors]);

  return (
    <>
      <div className="container">
      <LeftContainer activeStep={activeStep} handleButtonClick={handleButtonClick} />
        <RightContainer activeStep={activeStep} formData={formData} handleInputChange={handleInputChange} errors={errors}  isFormValid={isFormValid}  handleButtonClick={handleButtonClick}  handleBackButtonClick={handleBackButtonClick}  togglePosition={togglePosition}       // Pass togglePosition prop
         handleToggle={handleToggle}/>

        {/* Right container */}
        
      </div>
    </>
  );
}

export default App;
