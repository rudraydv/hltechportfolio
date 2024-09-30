import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapplink = () => {
  return (
    <a
      href="https://wa.me/918085686092" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-96 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default Whatsapplink;
