import React from 'react';
import { FaUtensils, FaBreadSlice, FaArrowRight, FaCoffee } from 'react-icons/fa';
import parfaitImg from "../assets/food1.avif";
import burritoImg from "../assets/food1.avif";
import pancakesImg from "../assets/food1.avif";
import avocadoToastImg from "../assets/food1.avif";
import quicheImg from "../assets/food1.avif";
import salmonBagelImg from "../assets/food1.avif";
import paniniImg from "../assets/food1.avif";
import croissantImg from "../assets/food1.avif";
import coffee from "../assets/food2.avif"
const Menu = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-6 md:gap-10 py-8 md:py-16 px-4 md:px-10'>
      {/* Hero Section */}
      <div className='w-full text-center mb-12 md:mb-[80px]'>
        <p className='text-[14px] md:text-[16px] font-semibold bg-[#ECD8A0] w-fit px-4 py-1 rounded-4xl text-brown mb-4 md:mb-[24px] mx-auto'>
          MOCHA'S SELECTION
        </p>
        <h1 className='text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] font-[500] text-brown mb-4 md:mb-[24px]'>
          Our menu
        </h1>
        <div className='w-full h-1 bg-[#ECD8A0] max-w-[200px] mx-auto'></div>
      </div>
      <div className='w-full max-w-[1000px] mb-12 md:mb-[80px]'>
        <h2 className='text-[32px] md:text-[48px] font-[500] text-brown mb-8 flex items-center gap-3'>
          <FaCoffee className='text-[#ECD8A0]' />
          Coffee specialties
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Americano */}
          <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
            <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
              <img src={coffee} alt="Americano" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-[24px] font-bold text-brown'>Americano</h3>
                <span className='text-[20px] font-bold text-[#004233]'>$4.90</span>
              </div>
              <p className='text-brown'>
                Espresso diluted with hot water, similar to black coffee but with a bolder flavor.
              </p>
            </div>
          </div>

          {/* Latte */}
          <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
            <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
              <img src={coffee} alt="Latte" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-[24px] font-bold text-brown'>Latte</h3>
                <span className='text-[20px] font-bold text-[#004233]'>$5.90</span>
              </div>
              <p className='text-brown'>
                Espresso with steamed milk and a small amount of froth.
              </p>
            </div>
          </div>

          {/* Cappuccino */}
          <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
            <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
              <img src={coffee} alt="Cappuccino" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-[24px] font-bold text-brown'>Cappuccino</h3>
                <span className='text-[20px] font-bold text-[#004233]'>$6.20</span>
              </div>
              <p className='text-brown'>
                Equal parts espresso, steamed milk, and frothed milk, topped with a dusting of cocoa or cinnamon.
              </p>
            </div>
          </div>

          {/* Espresso */}
          <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
            <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
              <img src={coffee} alt="Espresso" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-[24px] font-bold text-brown'>Espresso</h3>
                <span className='text-[20px] font-bold text-[#004233]'>$5.90</span>
              </div>
              <p className='text-brown'>
                Strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans.
              </p>
            </div>
          </div>
        </div>
        </div>
        {/* Breakfast Section */}
        <div className='w-full max-w-[1000px] mb-12 md:mb-[80px]'>
          <h2 className='text-[32px] md:text-[48px] font-[500] text-brown mb-8 flex items-center gap-3'>
            <FaBreadSlice className='text-[#ECD8A0]' />
            Breakfast delights
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Greek Yogurt Parfait */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={parfaitImg} alt="Greek Yogurt Parfait" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Greek Yogurt Parfait with Granola</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$11.90</span>
                </div>
                <p className='text-brown'>
                  Layers of Greek yogurt, honey, fresh fruit, and crunchy granola.
                </p>
              </div>
            </div>

            {/* Breakfast Burrito */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={burritoImg} alt="Breakfast Burrito" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Breakfast Burrito with Sausage and Eggs</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$19.80</span>
                </div>
                <p className='text-brown'>
                  Flour tortilla filled with scrambled eggs, sausage, cheese, and salsa.
                </p>
              </div>
            </div>

            {/* Pancakes */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={pancakesImg} alt="Pancakes" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Pancakes with Maple Syrup and Berries</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$16.90</span>
                </div>
                <p className='text-brown'>
                  Fluffy pancakes drizzled with maple syrup and garnished with fresh berries.
                </p>
              </div>
            </div>

            {/* Avocado Toast */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={avocadoToastImg} alt="Avocado Toast" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Avocado Toast with Poached Egg</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$15.90</span>
                </div>
                <p className='text-brown'>
                  Toasted sourdough topped with smashed avocado, a perfectly poached egg, salt, and pepper.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Savory Snacks Section */}
        <div className='w-full max-w-[1000px] mb-12 md:mb-[80px]'>
          <h2 className='text-[32px] md:text-[48px] font-[500] text-brown mb-8 flex items-center gap-3'>
            <FaUtensils className='text-[#ECD8A0]' />
            Savory snacks
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Quiche Lorraine */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={quicheImg} alt="Quiche Lorraine" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Quiche Lorraine with Bacon and Cheese</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$15.90</span>
                </div>
                <p className='text-brown'>
                  Savory pastry filled with eggs, cream, bacon, and cheese.
                </p>
              </div>
            </div>

            {/* Smoked Salmon Bagel */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={salmonBagelImg} alt="Smoked Salmon Bagel" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Smoked Salmon Bagel with Cream Cheese</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$14.90</span>
                </div>
                <p className='text-brown'>
                  Bagel topped with cream cheese, smoked salmon, capers, and red onion.
                </p>
              </div>
            </div>

            {/* Caprese Panini */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={paniniImg} alt="Caprese Panini" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Caprese Panini with Tomato and Mozzarella</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$13.30</span>
                </div>
                <p className='text-brown'>
                  Grilled panini with fresh tomato, mozzarella, basil, and balsamic glaze.
                </p>
              </div>
            </div>

            {/* Spinach Croissant */}
            <div className='flex flex-col md:flex-row gap-6 bg-[#F8F5EC] p-6 rounded-2xl border-2 border-[#ECD8A0]'>
              <div className='w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg'>
                <img src={croissantImg} alt="Spinach Croissant" className='w-full h-full object-cover' />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-[24px] font-bold text-brown'>Spinach and Feta Stuffed Croissant</h3>
                  <span className='text-[20px] font-bold text-[#004233]'>$12.40</span>
                </div>
                <p className='text-brown'>
                  Buttery croissant filled with sautéed spinach and feta cheese.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='w-full bg-[#004233] text-[#F4FFE3] p-8 md:p-12 rounded-2xl text-center'>
          <h2 className='text-[32px] md:text-[40px] font-[500] mb-6'>
            Need help customizing your template?
          </h2>
          <p className='text-[18px] md:text-[20px] mb-8 max-w-[700px] mx-auto'>
            Add superpowers to your template with our expert design services.
          </p>
          <button className='button-variant bg-[#ECD8A0] text-brown hover:bg-[#F4E6B0] px-8 py-3 text-[18px] flex items-center justify-center gap-2 mx-auto'>
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>
      );
};

      export default Menu;