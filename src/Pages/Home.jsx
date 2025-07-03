import React from 'react'
import heroimg from "../assets/heroimg.jpeg"
import exp1 from "../assets/exp1.svg"
import exp2 from "../assets/exp2.svg"
import exp3 from "../assets/exp3.svg"
import testmonial1 from "../assets/testmonial1.jpeg"


const Home = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-10 py-8 md:py-16 px-4 md:px-10'>
      {/* hero section */}
      <div className='container flex flex-col md:flex-row items-center justify-between mb-12 md:mb-[80px] gap-8'>
        <div className='w-full md:w-[586px] font-inter text-center md:text-left'>
          <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto md:mx-0'>MELBOURNE CAFE</p>
          <p className='text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] font-[500] text-brown mb-4 md:mb-[24px]'>
            Delicious<span className='font-libre font-medium italic'> bites,</span><br />
            devine <span className='font-libre font-medium italic'> brews.</span>
          </p>
          <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-brown mb-6 md:mb-[24px] w-full md:w-[500px] mx-auto md:mx-0'>
            Experience the culinary delights and exceptional coffees that define Mocha's distinctive charm in Melbourne.
          </p>
          <button className='button-variant mx-auto md:mx-0'>Contact us</button>
        </div>
        <div className='w-full md:w-auto h-[300px] md:h-[586px] relative'>
          <img src={heroimg} className='w-full h-full object-cover md:transform md:rotate-4 rounded-lg' alt="Cafe interior" />
        </div>
      </div>

      {/* card section */}
      <div className="container w-full md:w-[1040px] h-[400px] md:h-[499px] mb-12 md:mb-[80px] bg-[url(../src/assets/cardbg.jpg)] bg-cover bg-center bg-no-repeat rotate-2 rounded-3xl">
        <div className='w-full h-full bg-[#174a37e4] rounded-3xl flex flex-col justify-center items-center px-4 md:px-0'>
          <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px]'>CATERED DELIGHTS</p>
          <p className='text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-white mb-4 md:mb-[24px] text-center'>
            We cater,<span className='font-libre font-medium italic'> you celebrate!</span>
          </p>
          <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white text-center px-4 md:px-[140px] mb-6 md:mb-[24px]'>
            Sit back, relax, and let us take care of the feast – our hassle-free catering services bring delicious moments to your celebrations.
          </p>
          <button className='button-variant bg-[#ECD8A0] text-brown'>Learn more</button>
        </div>
      </div>

      {/* menu section */}
      <div className='container flex flex-col md:flex-row items-start justify-between mb-12 md:mb-[80px] gap-8'>
        {/* Left sticky text - becomes normal flow on mobile */}
        <div className='w-full md:w-fit font-inter md:sticky md:top-20'>
          <p className='text-[14px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px]'>MENU MAGIC</p>
          <p className='text-[32px] md:text-[54px] leading-[40px] md:leading-[60px] font-[500] text-brown mb-4 md:mb-[24px]'>
            Devour bliss,<br />
            <span className='font-libre font-medium italic text-[30px] md:text-[50px]'>guaranteed!</span>
          </p>
          <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-brown mb-6 md:mb-[24px] w-full md:w-[500px]'>
            Savor the goodness as our guaranteed satisfaction menu promises delight in every dish.
          </p>
          <button className='button-variant'>View menu</button>
        </div>

        {/* Right scrollable content - grid changes on mobile */}
        <div className='w-full h-full relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 overflow-y-auto'>
          <div className='w-full h-[300px] md:h-[470px] bg-[url(../src/assets/food1.avif)] bg-cover bg-center bg-no-repeat rounded-lg'></div>
          <div className='w-full h-[300px] md:h-[470px] bg-[url(../src/assets/food2.avif)] bg-cover bg-center bg-no-repeat rounded-lg md:mt-[40px]'></div>
          <div className='w-full h-[300px] md:h-[470px] bg-[url(../src/assets/food3.avif)] bg-cover bg-center bg-no-repeat rounded-lg md:mt-[-40px]'></div>
          <div className='w-full h-[300px] md:h-[470px] bg-[url(../src/assets/food4.avif)] bg-cover bg-center bg-no-repeat rounded-lg'></div>
        </div>
      </div>

      {/* experience section */}
      <div className='w-full md:w-[100vw] h-auto md:h-[684px] bg-[#004233] text-[#F4FFE3] mb-12 md:mb-[80px] flex flex-col items-center justify-center py-12 md:py-0 px-4 md:px-0'>
        <p className='text-[32px] md:text-[54px] leading-[40px] md:leading-[60px] font-[500] mb-6 md:mb-[24px] text-center'>
          Experience the <span className='font-libre font-medium italic text-[30px] md:text-[50px] text-[#ECD8A0]'>Mocha Magic</span>
        </p>
        <div className='flex flex-col md:flex-row justify-center items-start mt-6 md:mt-10 gap-6 md:gap-10'>
          <div className='w-full md:w-[368px] mb-6 md:mb-0'>
            <img src={exp1} className='w-10 h-10 mb-4 md:mb-[16px]' alt="Flavor icon" />
            <p className='text-[24px] md:text-[32px] font-libre italic mb-4 md:mb-[16px]'>Our magical flavor</p>
            <p className='text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0.5px] md:tracking-[1px]'>
              Indulge in our exclusive coffee blends, crafted with precision and passion for a truly exceptional caffeine experience.
            </p>
          </div>
          <div className='w-full md:w-[368px] mb-6 md:mb-0'>
            <img src={exp2} className='w-10 h-10 mb-4 md:mb-[16px]' alt="Delights icon" />
            <p className='text-[24px] md:text-[32px] font-libre italic mb-4 md:mb-[16px]'>Delicious delights</p>
            <p className='text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0.5px] md:tracking-[1px]'>
              Our menu boasts a fusion of global flavors, offering culinary creations that transcend the ordinary.
            </p>
          </div>
          <div className='w-full md:w-[368px]'>
            <img src={exp3} className='w-10 h-10 mb-4 md:mb-[16px]' alt="Ambiance icon" />
            <p className='text-[24px] md:text-[32px] font-libre italic mb-4 md:mb-[16px]'>Chic Ambiance</p>
            <p className='text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0.5px] md:tracking-[1px]'>
              Immerse yourself in the trendy and inviting atmosphere of Mocha, where stylish decor meets comfortable seating.
            </p>
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className='container flex flex-col md:flex-row items-center justify-between mb-12 md:mb-[80px] gap-8'>
        <div className='w-full md:w-auto h-[300px] md:h-[586px] relative'>
          <img src={testmonial1} className='w-full h-full object-cover md:transform md:rotate-4 rounded-lg' alt="Cafe interior" />
        </div>
        <div className='w-full md:w-[620px] font-inter order-1 md:order-2 text-center md:text-left'>
          <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto md:mx-0'>WHAT LOCALS ARE SAYING</p>
          <p className='text-[18px] md:text-[24px] font-libre italic leading-[26px] md:leading-[33px] text-brown mb-6 md:mb-[24px] font-[400]'>
            "Mocha exceeded all expectations! From the incredible coffee blends to the delightful menu, each visit is a culinary delight. The chic ambiance is the cherry on top, making it our favorite spot for a perfect blend of flavor and atmosphere. Highly recommended!"
          </p>
          <p className='text-[18px] md:text-[20px] font-semibold leading-[24px] md:leading-[30px] text-brown mb-4 md:mb-[24px] w-full md:w-[500px] mx-auto md:mx-0'>— Jack Wynd</p>
        </div>
      </div>
    </div>
  )
}

export default Home