import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto md:mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center border border-blue-600 bg-red-500 hover:cursor-pointer">PRICING</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-1/3 bg-gray-250 border border-gray-300 rounded-lg p-8 mx-4 transition duration-300 hover:shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center border-b border-gray-300 pb-2">Basic</h2>
          <p className="text-gray-600 mb-4">Basic Indoor Maps</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Basic Map data APIs</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Basic Routing APIs</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Basic Support</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-2xl font-bold mb-4">$3 per square feet</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 block mx-auto">Choose Plan</button>
        </div>
        <div className="w-full md:w-1/3 bg-gray-200 border border-gray-300 rounded-lg p-8 mx-4 transition duration-300 hover:shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center border-b border-gray-300 pb-2">Pro</h2>
          <p className="text-gray-600 mb-4">Interactive Indoor maps</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Custom Map data and positioning APIs</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Dedicated Application and CMS</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 mb-4">Endless Support</p>
          <hr className="border-gray-300 my-2" />
          <p className="text-2xl font-bold mb-4">$5 per square feet</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 block mx-auto">Choose Plan</button>
        </div>
        <div className="w-full md:w-1/3 bg-gray-250 border border-gray-300 rounded-lg p-8 mx-4 transition duration-300 hover:shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center border-b border-gray-300 pb-2">Premium</h2>
          <p className="text-gray-600 mb-4">2.5D Indoor Maps</p>
          <hr className="border-black-300 my-2" />
          <p className="text-gray-600 mb-4">15+ Map data and Positioning APIs</p>
          <hr className="border-black-300 my-2" />
          <p className="text-gray-600 mb-4">3+ Location Based AR Services</p>
          <hr className="border-black-300 my-2" />
          <p className="text-gray-600 mb-4">Endless Support</p>
          <hr className="border-black-300 my-2" />
          <p className="text-2xl font-bold mb-4">$8 per square feet</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 block mx-auto">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
