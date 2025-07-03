import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-[#024535] text-white py-12 px-4 sm:px-6 lg:px-8 rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto ">
        {/* Top section: "We're always here. Say hey! 👋" and Contact Us button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-white-600">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 md:mb-0 text-[#ECD8A0]">
            We're always here. Say <span className='font-libre italic'>hey!</span> 😊
          </h2>
          <button className="button-variant bg-[#ECD8A0] text-brown">
            Contact us
          </button>
        </div>

        {/* Middle section: Navigation, Utilities, and Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              {/* Placeholder for logo/icon */}
              <svg className="w-6 h-6 mr-2 text-[#8BC34A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-white">MOCHA</span>
            </div>
          </div>

          {/* Menu Links */}
          <div className='md:ml-[-100px]'>
            <h3 className="text-lg font-semibold mb-4 text-white-300">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Menu</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Catering</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Utilities Links */}
          <div className='md:ml-[-300px]'>
            <h3 className="text-lg font-semibold mb-4 text-white-300">Utilities</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Styleguide</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Update Log</a></li>
              <li><a href="#" className="text-white-400 hover:text-white transition-colors duration-200">Feedback</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="md:col-span-1 md:ml-[-100px]">
            <h3 className="text-lg font-semibold mb-4 text-white-300">Subscribe</h3>
            <p className="text-white-400 mb-4">Join our newsletter to stay up to date on features and releases.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4 ">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-grow p-3 rounded-lg  border border-[#6D877E] text-white placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
              />
              <button className="button-variant text-brown bg-[#ECD8A0]">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white-500">
              By subscribing you agree to with our <a href="#" className="underline hover:text-white">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom section: Copyright, Powered by, Designed by, and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white-600 text-white-400 text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <span>© 2024 Mocha. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Powered by <a href="#" className="underline hover:text-white">Framer</a></span>
            <span className="hidden md:inline">|</span>
            <span>Designed and developed by <a href="#" className="underline hover:text-white">Vilju Creative</a></span>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition-colors duration-200">
              {/* Facebook Icon */}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {/* Instagram Icon */}
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {/* LinkedIn Icon */}
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Font Awesome for social icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    </footer>
  )
}

export default Footer
