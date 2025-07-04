import React from 'react';
import { FaUtensils, FaCalendarAlt, FaHeart, FaArrowRight } from 'react-icons/fa';

const Catering = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-10 py-8 md:py-16 px-4 md:px-10'>
      {/* Hero Section */}
      <div className='w-full text-center mb-12 md:mb-[80px]'>
        <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto'>
          CATERING SERVICES
        </p>
        <h1 className='text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] font-[500] text-brown mb-4 md:mb-[24px]'>
          Let's cater,<br />
          <span className='font-libre font-medium italic'>with confidence</span>
        </h1>
        <div className='w-full h-1 bg-[#ECD8A0] max-w-[200px] mx-auto mb-6'></div>
        <p className='text-[18px] md:text-[24px] leading-[26px] md:leading-[32px] text-brown max-w-[800px] mx-auto'>
          Our catering fleets for every occasion!
        </p>
      </div>

      {/* Value Proposition Cards */}
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-[80px]'>
        {/* Simple Process Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaUtensils className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-4'>Just your</h3>
          <p className='text-[32px] font-libre italic text-[#004233] mb-2'>appetite & joy</p>
          <p className='text-brown'>
            We handle everything else - from setup to cleanup
          </p>
        </div>

        {/* Menu Variety Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaHeart className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-4'>Custom</h3>
          <p className='text-[32px] font-libre italic text-[#004233] mb-2'>menu options</p>
          <p className='text-brown'>
            Tailored to your event's theme and dietary needs
          </p>
        </div>

        {/* Booking Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaCalendarAlt className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-4'>Book your</h3>
          <p className='text-[32px] font-libre italic text-[#004233] mb-2'>culinary celebration</p>
          <p className='text-brown'>
            Reserve your date with our easy online system
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className='w-full bg-[#004233] text-[#F4FFE3] p-8 md:p-12 rounded-2xl text-center mb-12 md:mb-[80px]'>
        <h2 className='text-[32px] md:text-[40px] font-[500] mb-6'>
          Ready to plan your event?
        </h2>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <button className='button-variant bg-[#ECD8A0] text-brown hover:bg-[#F4E6B0] px-8 py-3 text-[18px] flex items-center justify-center gap-2'>
            View Catering Menu <FaArrowRight />
          </button>
          <button className='button-variant bg-transparent border-2 border-[#ECD8A0] text-[#ECD8A0] hover:bg-[#174a37] px-8 py-3 text-[18px] flex items-center justify-center gap-2'>
            Contact Our Team <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className='w-full max-w-[800px] bg-[#F8F5EC] p-8 md:p-12 rounded-2xl border-2 border-[#ECD8A0] text-center'>
        <p className='text-[18px] md:text-[24px] font-libre italic leading-[26px] md:leading-[33px] text-brown mb-6'>
          "Mocha's catering made our company retreat unforgettable! The food was exquisite and their team handled everything seamlessly."
        </p>
        <p className='text-[18px] font-semibold text-[#004233]'>
          — Sarah K., Corporate Events Manager
        </p>
      </div>
    </div>
  );
};

export default Catering;