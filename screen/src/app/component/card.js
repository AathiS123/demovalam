const Card = ({ heading, paragraph, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    {imageUrl && <img src={imageUrl} alt={heading} className="w-full h-auto mb-4 rounded" />}
    <h3 className="text-xl font-bold text-gray-800">{heading}</h3>
    <p className="text-gray-600 mt-2">{paragraph}</p>
  </div>
);

export default Card;

