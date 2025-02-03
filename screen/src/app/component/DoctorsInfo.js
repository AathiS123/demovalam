// components/DoctorsInfo.js
import React from 'react';

const DoctorsInfo = ({ doctorData }) => {
    const {
        Heading,
        Paragraph,
        Email,
        Number1,
        Number2,
        AvailableHrs1,
        AvailableHrs2,
        Image,
    } = doctorData || {};

    // Construct the image URL
    const imageUrl = `http://localhost:1337${Image?.data?.[0]?.attributes?.url}`;

    return (

        <div className="mx-auto p-9 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col lg:flex-row space-x-6"> {/* Use lg:flex-row for larger devices */}
                <div className="flex-1 flex-col mt-4 sm:order-2 lg:order-1">
                    <h3 className="text-3xl font-semibold">{Heading}</h3>
                    <p className="text-gray-700 mt-4 text-xl">{Paragraph}</p>
                    <div className="mt-6 space-y-2 text-gray-600">
                        <p>Email: <a href={`mailto:${Email}`} className="text-blue-500">{Email}</a></p>
                        <p>{Number1}</p>
                        <p>{Number2}</p>
                    </div>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <p>{AvailableHrs1}</p>
                        <p>{AvailableHrs2}</p>
                    </div>
                    <div className='mt-4 space-y-2 bg-[#B93177]  text-[#fff] w-40 p-4 text-center rounded-lg'>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="flex-1 mt-6 lg:mt-0 sm:order-1 lg:order-2"> {/* Add margin top on smaller screens, remove on larger screens */}
                    <img
                        src={imageUrl}
                        alt="Doctor"
                        className="w-full h-auto object-cover rounded-full"  // Ensure image is responsive
                    />
                </div>
            </div>
        </div>

    );
};

export default DoctorsInfo;
