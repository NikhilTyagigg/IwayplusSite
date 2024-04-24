import React from 'react';

const Work = () => {
  return (
    <div className="container mt-20 md:mt-27 mx-auto px-4 py-8">
      <div className="bg-gray-200 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-center">What We Have Done</h2>
        <div className="flex justify-between mt-4">
          <div className="text-center hover:cursor-pointer">
            <h3 className="text-3xl font-bold">100,000+ Sq. mtr.</h3>
            <p>Coverage</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p>Indoor Landmarks</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <h3 className="text-3xl font-bold">8+</h3>
            <p>Building Mapped</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <h3 className="text-3xl font-bold">5+</h3>
            <p>Projects Done</p>
          </div>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 border border-red-200 rounded-lg">
        <iframe
          title="YouTube Video"
          className="w-full"
          src="https://www.youtube.com/embed/NZkJwkvyUM8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ height: '500px' }} // Adjust the height as needed
        ></iframe>
      </div>
    </div>
  );
};

export default Work;
