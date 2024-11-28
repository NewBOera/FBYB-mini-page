import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form: React.FC = () => {
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    const getCountryUser = async () => {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const country: string = data.country;
      setCountry(country.toLowerCase());
    };

    getCountryUser();
  }, []);

  const [formData, setFormData] = useState({
    phone: '',
  });

  const onPhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  return (
    <form id="booking-form" className="flex flex-wrap justify-between gap-1 sm:gap-2 lg:gap-4 form">
      <div className="pb-2 w-full sm:w-[45%] lg:w-[30%]">
        <label className="block mb-2 text-[#111827] font-light text-[14px]/[22px] lg:text-[16px]/[24px]">First name</label>
        <div className="relative text-gray-400">
          <input
            type="text"
            name="firstName"
            id="booking-firstName"
            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 text-[16px]/[24px] md:text-[18px]/[24px] placeholder:font-light"
            placeholder="Enter your first name"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="pb-2 w-full sm:w-[45%] lg:w-[30%]">
        <label className="block mb-2 text-[#111827] font-light text-[14px]/[22px] lg:text-[16px]/[24px]">Last name</label>
        <div className="relative text-gray-400">
          <input
            type="text"
            name="lastName"
            id="booking-lastName"
            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 text-[16px]/[24px] md:text-[18px]/[24px] placeholder:font-light"
            placeholder="Enter your last name"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="pb-2 w-full sm:w-[45%] lg:w-[30%]">
        <label className="block mb-2 text-[#111827] font-light text-[14px]/[22px] lg:text-[16px]/[24px]">Phone number</label>
        <PhoneInput country={country} value={formData.phone} regions={'europe'} onChange={onPhoneChange} />
      </div>

      <div className="pb-2 w-full sm:w-[45%] lg:w-[30%]">
        <label className="block mb-2 text-[#111827] font-light text-[14px]/[22px] lg:text-[16px]/[24px]">Email address</label>
        <div className="relative text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
              <path fill="#66666688" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"></path>
            </svg>
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 text-[16px]/[24px] md:text-[18px]/[24px] placeholder:font-light"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="pb-2 w-full lg:w-[65%]">
        <label className="block mb-2 text-[#111827] font-light text-[14px]/[22px] lg:text-[16px]/[24px]">Casino tournament</label>
        <div className="relative text-gray-400">
          <select
            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 text-[16px]/[24px] md:text-[18px]/[24px] placeholder:font-light"
            name="events-select"
            id="events-select"
          >
            <option value="1_event">$1,000,000 Push Your Luck</option>
            <option value="2_event">$10,000 Bingo After Dar</option>
            <option value="3_event">Fall Harvest of Cash</option>
            <option value="4_event">Prairie Wind Casino Slot Tournament</option>
            <option value="5_event">Trick-or-Bingo 19 Game Special</option>
            <option value="6_event">Wee! Re-Entry Poker Tournament</option>
            <option value="7_event">$7,000 Neighborhood Hot Seats</option>
            <option value="8_event">$500,000 Autumn classNameic Slot Tournament</option>
            <option value="9_event">Thank You Thursdays in the Pit!</option>
            <option value="z_event">$500,000 Pigskin Pick</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => sendForm('booking-form')}
        className="w-full bg-black text-white py-2 rounded-lg px-4 text-[16px]/[20px] md:text-[18px]/[25px] lg:text-[20px]/[28px] font-semibold hover:scale-95 transition-all duration-200 sm:w-[48%] lg:w-[30%]"
      >
        Submit jeje
      </button>
    </form>
  );
};

export default Form;
