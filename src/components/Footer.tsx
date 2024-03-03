import React from 'react'
import logo from '../assets/logo.svg';
import iconFbook from '../assets/icon-facebook.svg';
import iconX from '../assets/icon-twitter.svg';
import iconInsta from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-7 p-14
    md:flex-row md:justify-between md:gap-0 md:p-0 md:py-14'>
      <img src={logo} alt="logo" />
      <p> Copyright - Suite</p>
      <div className='flex justify-center items-center gap-5'>
        <img src={iconFbook} alt="Facebook icon" />
        <img src={iconX} alt="X icon" />
        <img src={iconInsta} alt="Instagram icon" />
      </div>
    </div>
  )
}

export default Footer