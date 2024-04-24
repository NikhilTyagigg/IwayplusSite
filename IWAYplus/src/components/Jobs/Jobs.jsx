import React from 'react';

const Jobs = () => {
  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center border border-red-200">JOBS</h1>
      <div className="flex flex-wrap justify-center gap-8 border border-red-300">
        <JobCard title="React Native Developer" />
        <JobCard title="Android Developer" />
        <JobCard title="Progressive Web App Developer" />
        <JobCard title="Mapping/GIS Professional" />
      </div>
    </div>
  );
};

const JobCard = ({ title }) => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfOZbLFKQJ4cqGZWaoUXGGI7tplfcYBfJIqPtywlSZOynmejA/viewform';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-64">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      <a href={formUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-600 transition duration-300 inline-block w-full text-center">Apply Now</a>
    </div>
  );
};

export default Jobs;
