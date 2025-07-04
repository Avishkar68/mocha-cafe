import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-10 py-8 md:py-16 px-4 md:px-10'>
      {/* Hero Section */}
      <div className='w-full text-center mb-12 md:mb-[80px]'>
        <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto'>
          CONNECT WITH US
        </p>
        <h1 className='text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] font-[500] text-brown mb-4 md:mb-[24px]'>
          Contact, connect,<br />
          <span className='font-libre font-medium italic'>and indulge!</span>
        </h1>
        <div className='w-full h-1 bg-[#ECD8A0] max-w-[200px] mx-auto'></div>
      </div>

      {/* Contact Info Section */}
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-[80px]'>
        {/* Email Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaEnvelope className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-2'>Email us</h3>
          <a href='mailto:info@mocha.com' className='text-[18px] hover:text-[#004233] transition-colors'>
            info@mocha.com
          </a>
        </div>

        {/* Phone Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaPhone className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-2'>Phone us</h3>
          <a href='tel:+90877890' className='text-[18px] hover:text-[#004233] transition-colors'>
            9087 7890
          </a>
        </div>

        {/* Location Card */}
        <div className='bg-[#F8F5EC] p-8 rounded-2xl flex flex-col items-center text-center border-2 border-[#ECD8A0]'>
          <div className='bg-[#ECD8A0] p-4 rounded-full mb-4'>
            <FaMapMarkerAlt className='text-brown text-2xl' />
          </div>
          <h3 className='text-[24px] font-bold mb-2'>Find us</h3>
          <p className='text-[16px]'>
            123 Name Street<br />
            Kolma, 56789<br />
            Stateville
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='w-full max-w-[800px] bg-[#F8F5EC] p-8 md:p-12 rounded-2xl mb-12 md:mb-[80px] border-2 border-[#ECD8A0]'>
        <h2 className='text-[32px] md:text-[40px] font-[500] text-brown mb-8 text-center'>
          Send us a message
        </h2>
        
        <form className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label htmlFor='firstName' className='block text-brown mb-2 font-medium'>
                First Name<span className='text-[#D32F2F]'>*</span>
              </label>
              <input
                type='text'
                id='firstName'
                className='w-full px-4 py-3 border border-[#E0D8C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECD8A0] bg-white'
                required
              />
            </div>
            
            <div>
              <label htmlFor='lastName' className='block text-brown mb-2 font-medium'>
                Last Name<span className='text-[#D32F2F]'>*</span>
              </label>
              <input
                type='text'
                id='lastName'
                className='w-full px-4 py-3 border border-[#E0D8C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECD8A0] bg-white'
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor='email' className='block text-brown mb-2 font-medium'>
              Email<span className='text-[#D32F2F]'>*</span>
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-3 border border-[#E0D8C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECD8A0] bg-white'
              required
            />
          </div>
          
          <div>
            <label htmlFor='message' className='block text-brown mb-2 font-medium'>
              Message
            </label>
            <textarea
              id='message'
              rows='5'
              className='w-full px-4 py-3 border border-[#E0D8C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECD8A0] bg-white'
            ></textarea>
          </div>
          
          <div className='flex justify-center'>
            <button
              type='submit'
              className='button-variant bg-[#004233] text-white hover:bg-[#174a37] px-8 py-3 text-[18px] flex items-center gap-2'
            >
              <FaPaperPlane />
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* CTA Section */}
      <div className='w-full bg-[#004233] text-[#F4FFE3] p-8 md:p-12 rounded-2xl text-center border-2 border-[#ECD8A0]'>
        <h2 className='text-[32px] md:text-[40px] font-[500] mb-4'>
          Need help customizing your template?
        </h2>
        <p className='text-[18px] md:text-[20px] mb-8 max-w-[700px] mx-auto'>
          Add superpowers to your template with our expert design services.
        </p>
        <button className='button-variant bg-[#ECD8A0] text-brown hover:bg-[#F4E6B0] px-8 py-3 text-[18px]'>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;