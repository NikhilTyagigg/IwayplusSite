import React from 'react';

function Demo() {
  return (
    <div className="md:mt-20 mx-20">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title="YouTube Video"
          className="w-full"
          src="https://www.youtube.com/embed/mO3ucugGS6Y"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ height: '500px' }} // Adjust the height as needed
        ></iframe>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg mt-8 flex items-center">
        <div className="w-1/2 pr-4">
          <p>
            Our primary skill and strength lies in creating accessible and interactive indoor maps at scale and making them suitable for multifloor and multibuilding navigation by integrating indoor positioning systems.
          </p>
          <p className="mt-4">
            Having decade-long expertise in the assistive technology domain, another key strength of our team is universal design. We are skilled to meet the product design requirements for a diverse user group.
          </p>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-semibold mb-4">Our Skills</h2>
          <div>
            <h3 className="font-bold">Indoor Mapping</h3>
            <div className="relative h-4 bg-gray-400 rounded-full mt-1">
              <div className="absolute top-0 h-4 bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-right">100%</p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Positioning System</h3>
            <div className="relative h-4 bg-gray-400 rounded-full mt-1">
              <div className="absolute top-0 h-4 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-right">80%</p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Wayfinding and Tracking</h3>
            <div className="relative h-4 bg-gray-400 rounded-full mt-1">
              <div className="absolute top-0 h-4 bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="text-right">90%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
