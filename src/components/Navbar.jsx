import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/image.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogoClick = () => {
        navigate('/');
        closeMenu();
    };

    return (
        <div className='w-full h-[80px] md:h-[100px] bg-white flex justify-center items-center  top-0 left-0 z-50 shadow-sm md:shadow-none'>
            <div className='w-full px-4 md:w-[1200px] flex justify-between items-center'>
                <div 
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={handleLogoClick}
                >
                    <img src={logo} className='w-6 h-6' alt="Mocha Logo" />
                    <p className='text-brown text-[20px]'>MOCHA</p>
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center text-[16px] gap-12 text-brown'>
                    <Link to="/about" className='hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/menu" className='hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Menu
                    </Link>
                    <Link to="/catering" className='hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Catering
                    </Link>
                    <Link to="/contact" className='hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
                
                <div className='hidden md:block'>
                    <button className='button-variant'>Book a Table</button>
                </div>
                
                {/* Mobile Hamburger Menu */}
                <button 
                    className='md:hidden text-brown focus:outline-none'
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col items-center gap-6'>
                    <Link to="/about" className='text-brown text-[18px] hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/menu" className='text-brown text-[18px] hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Menu
                    </Link>
                    <Link to="/catering" className='text-brown text-[18px] hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Catering
                    </Link>
                    <Link to="/contact" className='text-brown text-[18px] hover:text-brown-dark cursor-pointer' onClick={closeMenu}>
                        Contact
                    </Link>
                    <button className='button-variant w-full max-w-[200px]'>Book a Table</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;