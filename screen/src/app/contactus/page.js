import React from 'react';
import Banner from '../component/banner';
import WhatsAppButton from '../component/WhatsAppButton';

export default function page() {
  return (
    <div>
      <Banner />

      <div className='relative'>
        {/* Map Image */}
        <img src='/contactimgs/mapimg.png' alt='mapimg' className='w-full h-auto' />

        {/* Contact Form Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh] sm:max-h-[85vh]">

            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-[#B93177] p-8 flex flex-col justify-center gap-8">
              <span>
                <img src='/contactimgs/location-img.png' alt='location-icon' className='fill-black' />
              </span>
              <div>
                <h1 className="text-3xl font-bold text-[#fff] mb-4">Get in Touch</h1>
                <p className="text-slate-300 text-lg mb-6">
                  Lorem ipsum dolor
                </p>
              </div>
              <div>
                <p className='text-[#fff] ml-8 text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta euismod massa ut ultrices. Ut turpis orci, gravida et ex a, tincidunt
                </p>
              </div>
              <div>
                <div className='flex space-x-4'>
                  <img src='/contactimgs/phoneicon.png' alt='phoneicon' className='size-5' />
                  <p className="text-[#fff]">Phone: +123 456 7890</p>
                </div>
                <div className='flex space-x-4'>
                  <img src='/contactimgs/phoneicon.png' alt='phoneicon' className='size-5' />
                  <p className="text-[#fff]">Phone: +123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Appointment</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Extra Space for Responsiveness */}
        <div className='bg-white max-h-full p-8 md:p-80'></div>
      </div>

    <WhatsAppButton/>

    </div>
  );
}
