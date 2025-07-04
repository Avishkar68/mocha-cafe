import React from 'react';
import aboutHero from "../assets/abt1.avif";
import team1 from "../assets/team1.webp";
import team2 from "../assets/team2.webp";
import team3 from "../assets/team3.jpeg";
import valuesIcon from "../assets/exp1.svg";
import communityIcon from "../assets/exp2.svg";

const About = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-10 py-8 md:py-16 px-4 md:px-10'>
      {/* Hero Section */}
      <div className='container flex flex-col md:flex-row items-center justify-between mb-12 md:mb-[80px] gap-8'>
        <div className='w-full md:w-[586px] font-inter text-center md:text-left'>
          <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto md:mx-0'>OUR STORY</p>
          <p className='text-[40px] md:text-[80px] leading-[48px] md:leading-[76px] font-[500] text-brown mb-4 md:mb-[24px]'>
            More than <br/>just<span className='font-libre font-medium italic'> a cafe</span>
          </p>
          <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-brown mb-6 md:mb-[24px] w-full md:w-[500px] mx-auto md:mx-0'>
            Founded in 2012, Mocha began as a small coffee cart in Melbourne's CBD. Today, we're a beloved local institution known for our exceptional brews and warm hospitality.
          </p>
        </div>
        <div className='w-full md:w-auto h-[300px] md:h-[586px] relative'>
          <img src={aboutHero} className='w-full h-full object-cover md:transform md:rotate-4 rounded-lg' alt="Cafe founders" />
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className='w-full md:w-[100vw] h-auto md:h-[684px] bg-[#004233] text-[#F4FFE3] mb-12 md:mb-[80px] flex flex-col items-center justify-center py-12 md:py-0 px-4 md:px-0'>
        <div className='container flex flex-col md:flex-row items-center justify-around gap-8'>
          <div className='w-full md:w-[586px] font-inter text-center md:text-left'>
            <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto md:mx-0'>OUR PHILOSOPHY</p>
            <p className='text-[32px] md:text-[54px] leading-[40px] md:leading-[60px] font-[500] text-[#F4FFE3] mb-4 md:mb-[24px]'>
              Coffee with<span className='font-libre font-medium italic text-[30px] md:text-[50px] text-[#ECD8A0]'> conscience</span>
            </p>
            <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#F4FFE3] mb-6 md:mb-[24px] w-full md:w-[500px] mx-auto md:mx-0'>
              We believe in ethical sourcing, sustainable practices, and creating a space where everyone feels welcome. Our beans are 100% fair trade, and we compost all our coffee grounds.
            </p>
          </div>
          <div className='w-full md:w-[500px] grid grid-cols-2 gap-4'>
            <div className='bg-[#174a37] p-6 rounded-lg'>
              <img src={valuesIcon} className='w-10 h-10 mb-4' alt="Values icon" />
              <p className='font-bold mb-2'>Our Values</p>
              <p className='text-sm'>We obsess over every detail, from single-origin beans roasted in-house to pastries baked fresh daily.</p>
            </div>
            <div className='bg-[#174a37] p-6 rounded-lg'>
              <img src={communityIcon} className='w-10 h-10 mb-4' alt="Community icon" />
              <p className='font-bold mb-2'>Community</p>
              <p className='text-sm'>We host monthly local artist showcases and charity events.Rotating monthly exhibits (15% of art sales go to youth arts programs)

</p>
            </div>
            <div className='bg-[#174a37] p-6 rounded-lg col-span-2'>
              <p className='font-bold mb-2 text-[#ECD8A0]'>Sustainability Promise</p>
              <p className='text-sm'>By 2025, we aim to be Melbourne's first zero-waste cafe with all packaging compostable and 90% of ingredients sourced within 100km.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='container flex flex-col items-center justify-center mb-12 md:mb-[80px]'>
        <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px]'>MEET THE TEAM</p>
        <p className='text-[32px] md:text-[54px] leading-[40px] md:leading-[60px] font-[500] text-brown mb-12 md:mb-[48px] text-center'>
          The faces behind<span className='font-libre font-medium italic text-[30px] md:text-[50px]'> the magic</span>
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col items-center'>
            <img src={team1} className='w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-4' alt="Head barista" />
            <p className='text-[20px] font-bold'>Sarah Chen</p>
            <p className='text-brown/70 mb-2'>Head Barista & Co-founder</p>
            <p className='text-center text-sm'>"I've been perfecting coffee craft for 15 years. Every cup tells a story."</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={team2} className='w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-4' alt="Pastry chef" />
            <p className='text-[20px] font-bold'>Miguel Rodriguez</p>
            <p className='text-brown/70 mb-2'>Pastry Chef</p>
            <p className='text-center text-sm'>"Our pastries are made with the same love I put into baking for my family."</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={team3} className='w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-4' alt="Manager" />
            <p className='text-[20px] font-bold'>Aisha Johnson</p>
            <p className='text-brown/70 mb-2'>General Manager</p>
            <p className='text-center text-sm'>"Mocha isn't just a cafe, it's a home away from home for our team and customers."</p>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className='container flex flex-col md:flex-row items-center justify-between mb-12 md:mb-[80px] gap-8'>
        <div className='w-full md:w-[586px] font-inter'>
          <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px]'>OUR JOURNEY</p>
          <p className='text-[32px] md:text-[54px] leading-[40px] md:leading-[60px] font-[500] text-brown mb-4 md:mb-[24px]'>
            Milestones &<span className='font-libre font-medium italic text-[30px] md:text-[50px]'> memories</span>
          </p>
          
          <div className='space-y-6'>
            <div className='border-l-4 border-[#ECD8A0] pl-4 py-2'>
              <p className='font-bold'>2012</p>
              <p>Started as a coffee cart in Federation Square</p>
            </div>
            <div className='border-l-4 border-[#ECD8A0] pl-4 py-2'>
              <p className='font-bold'>2015</p>
              <p>Opened our first brick-and-mortar location</p>
            </div>
            <div className='border-l-4 border-[#ECD8A0] pl-4 py-2'>
              <p className='font-bold'>2018</p>
              <p>Won "Best Cafe in Melbourne" from Local Eats</p>
            </div>
            <div className='border-l-4 border-[#ECD8A0] pl-4 py-2'>
              <p className='font-bold'>2022</p>
              <p>Expanded to include full kitchen and catering services</p>
            </div>
          </div>
        </div>
        
        <div className='w-full md:w-[500px] bg-[#004233] text-[#F4FFE3] p-8 rounded-2xl'>
          <p className='text-[24px] md:text-[32px] font-libre italic mb-6'>Join Our Story</p>
          <p className='mb-6'>We're always looking for passionate people to join our team. Whether you're an experienced barista or just love great coffee, we'd love to hear from you.</p>
          <button className='button-variant bg-[#ECD8A0] text-brown w-full md:w-auto'>Careers at Mocha</button>
        </div>
      </div>
    </div>
  );
};

export default About;