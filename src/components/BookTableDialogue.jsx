import React from 'react';

const BookingDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-[4px]  bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl transform transition-all">
        {/* Dialog Header */}
        <div className="bg-[#004233] p-6 text-white">
          <h2 className="text-2xl font-medium">Book a Table</h2>
          <p className="text-[#ECD8A0] mt-1">Reserve your spot at Mocha</p>
        </div>
        
        {/* Dialog Body */}
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-brown text-sm font-medium mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-brown text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-brown text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                placeholder="+61 123 456 789"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-brown text-sm font-medium mb-1" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                />
              </div>
              
              <div>
                <label className="block text-brown text-sm font-medium mb-1" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-brown text-sm font-medium mb-1" htmlFor="guests">
                Number of Guests
              </label>
              <select
                id="guests"
                className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
              >
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5+ people</option>
              </select>
            </div>
            
            <div>
              <label className="block text-brown text-sm font-medium mb-1" htmlFor="notes">
                Special Requests
              </label>
              <textarea
                id="notes"
                rows="3"
                className="w-full px-4 py-2 border border-[#ECD8A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004233]"
                placeholder="Any special requirements..."
              ></textarea>
            </div>
          </form>
        </div>
        
        {/* Dialog Footer */}
        <div className="bg-[#F4FFE3] px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-brown border cursor-pointer border-brown rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#004233] cursor-pointer text-white rounded-lg hover:bg-[#003325] transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDialog;