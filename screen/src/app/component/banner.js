'use client';

const BannerSection = ({ bannerTitle, bannerImageUrl }) => {
    return (
        <div className="relative bg-gray-100">
            <div
                className="w-full h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImageUrl})` }} // Use the dynamic bannerImageUrl prop
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-end">
                    <h1 className="text-white md:text-3xl font-bold pb-6 text-wrap max-w-[38%] break-words text-center italic ">{bannerTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;



