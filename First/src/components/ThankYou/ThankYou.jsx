import React from 'react';
import thankyouicon from '../../assets/icon-thank-you.svg';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <>
    <div className="thankyou">
        <img src={thankyouicon} alt="" className='thankyouicon' />
       <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
    </>
  )
}

export default ThankYou
