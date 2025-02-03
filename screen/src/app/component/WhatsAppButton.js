import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <img src="/contactimgs/download.png" className="h-12 w-12 rounded-xl" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
