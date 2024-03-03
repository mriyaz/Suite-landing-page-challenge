import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-1">
            <img src={logo} alt="logo" />
            <button className="border border-black rounded-lg px-4 py-2 font-bold text-sm md:px-6 md:py-3">
                Request Beta Access
            </button>
        </div>
    )
}

export default Header