import React from "react";

// Props interface for TypeScript (optional)
interface PartnerLogosProps {
  logos: string[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({logos}) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Partners
        </h2>
        <div className="flex flex-row justify-center items-center gap-10 justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 md:h-16 lg:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
