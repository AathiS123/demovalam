import React from "react";
import { FaPhoneAlt } from "react-icons/fa";


async function fetchData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/headers?populate=*`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null if the fetch fails
    }
}

export default async function Header() {
    const data = await fetchData();

    if (!data || !data.data?.length) {
        return <div>Error: Unable to load data from the API</div>;
    }

    // Extracting attributes safely
    const attributes = data.data[0]?.attributes;
    const logoUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${attributes.logo?.data?.attributes?.url || "/default-logo.png"}`;
    const bannerTitle = attributes.Banner?.Title || "Default Banner Title";
    // const bannerImageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${data.data[0].attributes.Banner.image.data[0].attributes.url}`;
    const bannerImageUrl = attributes.Banner?.image?.data?.[0]?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${attributes.Banner.image.data[0].attributes.url}`
        : "/default-banner.jpg"; // Fallback to a default banner image if URL is undefined


    const mesage = attributes.message || {
  //   heading: "Welcome to Our Clinic",
  //   subheading: "Your health is our priority",
  //   par: "We are here to serve you.",

  };
return(
    <nav className = "bg-white shadow-md" >
    <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
            <img src={logoUrl} alt="Logo" className="h-10" />
        </div>
        <ul className="flex space-x-6 text-gray-800 font-semibold">
            <li>
                <a href="#" className="hover:text-blue-600">
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-600">
                    About Us
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-600">
                    Our Doctors
                </a>
            </li>
            <li>
                <a href="/contactus" className="hover:text-blue-600">
                    Contact Us
                </a>
            </li>
        </ul>

        {/* Appointment Button */}
        <a
            href="tel:+1234567890"
            className="hidden md:flex items-center border border-blue-800 rounded-lg overflow-hidden"
        >
            <div className="flex items-center justify-center bg-blue-800 p-2">
                <FaPhoneAlt className="text-white mt-2 text-lg" />
            </div>
            <span className="px-4 py-2 text-blue-800 font-semibold">
                Make An Appointment
            </span>
        </a>
    </div>
</nav>
)
}