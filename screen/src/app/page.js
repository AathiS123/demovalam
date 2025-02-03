"use client";
import React, { useState, useEffect } from 'react';
import BannerSection from './component/banner';
import Card from './component/card';
import QuerySection from './component/QuerySection';
import DoctorsInfo from './component/DoctorsInfo';
import WhatsAppButton from './component/WhatsAppButton';

// State Management
const Page = () => {
  const [bannerData, setBannerData] = useState(null);
  const [welcomeNotes, setWelcomeNotes] = useState(null);
  const [cards, setCards] = useState([]);
  const [querySectionData, setQuerySectionData] = useState(null);
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // banner section
    const fetchBannerData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/home-pages?populate[BannerSection][populate]=*');
        const data = await response.json();

        const bannerSection = data.data[0].attributes.BannerSection[0];
        const bannerTitle = bannerSection.Title;
        const bannerImageUrl = 'http://localhost:1337' + bannerSection.image.data[0].attributes.url;

        setBannerData({ bannerTitle, bannerImageUrl });
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData();

    // Fetching the Welcome Notes
    const fetchData = async () => {
      const res = await fetch('http://localhost:1337/api/home-pages?populate=*');
      const data = await res.json();
      const welcomeNotesData = data.data[0]?.attributes?.WelcomeNotes;
      setWelcomeNotes(welcomeNotesData);
    };

    fetchData();

    // Fetching cards data
    const fetchCards = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/home-pages?populate[Cards][populate]=*');
        const data = await res.json();
        console.log('Fetched Cards:', data);
        setCards(data?.data?.[0]?.attributes?.Cards || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load cards");
        setLoading(false);
      }
    };

    fetchCards();


    // Fetching query section data
    const fetchQuerySection = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/home-pages?populate[QuerySection][populate]=*');
        const data = await res.json();
        const querySection = data?.data?.[0]?.attributes?.QuerySection;
        setQuerySectionData(querySection);
      } catch (error) {
        console.error('Error fetching query section data:', error);
      }
    };

    fetchQuerySection();

    // Fetching doctor information
    const fetchDoctorData = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/home-pages?populate[DoctorsInformation][populate]=*');
        const data = await res.json();
        const doctorInfo = data?.data?.[0]?.attributes?.DoctorsInformation;
        setDoctorData(doctorInfo);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();

  }, []);

  if (loading || !bannerData || !welcomeNotes || !querySectionData || !doctorData) {
    return <div>Loading...</div>;
  }

  const { Title, Heading, Paragraph, Button } = welcomeNotes || {};

  return (
    <div>
      {/* Banner section */}
      <BannerSection
        bannerTitle={bannerData.bannerTitle}
        bannerImageUrl={bannerData.bannerImageUrl}
      />

      {/* Welcome notes section */}
      <div className="max-w-full bg-white md:p-10 flex flex-col items-center mx-auto p-3">
        <h2 className="text-3xl font-bold text-blue-600">{Title}</h2>
        <div className="flex items-center justify-center my-2 space-x-1">
          {/* Left Line */}
          <div className="h-0.5 w-12 bg-[#6E1E59]"></div>

          {/* Circle */}
          <div className="w-3 h-3 rounded-full bg-[#6E1E59]"></div>

          {/* Right Line */}
          <div className="h-0.5 w-12 bg-[#6E1E59]"></div>
        </div>
        <h3 className="text-xl text-gray-800 mt-2">{Heading}</h3>
        <p className="text-gray-600 mt-4">{Paragraph}</p>
        <button className="mt-4 px-4 py-2 bg-[#B93177]  text-[#fff] rounded-lg">
          {Button}
        </button>
      </div>
     


      {/* Cards Section */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 p-6 bg-[#FFD6EB]">
        {error && <div>{error}</div>}

        {Array.isArray(cards) && cards.map((card) => {
          // Adjusted the path to fetch the correct image URL
          const imageUrl = `http://localhost:1337${card.image?.data?.attributes?.url}`;
          console.log('Card Image URL:', imageUrl); // Debugging

          return (
            <Card
              key={card.id}
              heading={card.heading}
              paragraph={card.paragraph}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>

      {/* Doctors Info Section (moved after cards) */}
      <DoctorsInfo doctorData={doctorData} />  {/* Render the DoctorsInfo component after the cards */}


      {/* Query Section - Placed after Cards */}
      <QuerySection queryData={querySectionData} />  {/* Passing query section data */}
      <WhatsAppButton />

    </div>
  );
};

export default Page;
