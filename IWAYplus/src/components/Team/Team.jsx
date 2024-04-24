import React from 'react';
import p1 from '../../assets/Mbala.png';
import p2 from '../../assets/Pvmrao.png';
import p3 from '../../assets/Vikas.png';
import p4 from '../../assets/Sunita.png';
import p5 from '../../assets/Mishor.png';
import p6 from '../../assets/Pulkit.png';
import teamBackground from '../../assets/back2.gif'

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Prof. Balakrishnan', position: 'Mentor, Technical Development', description: 'Prof. M. Balakrishnan is a honorary professor in Computer Science at IIT Delhi and Mentor at IWAYPLUS.', image: p1 },
    { id: 2, name: 'Prof. P.V.M. Rao', position: 'Mentor, Business Development', description: 'Prof. PVM Rao is a professor in Department of Design at IIT Delhi and Mentor at IWAYPLUS.', image: p2 },
    { id: 3, name: 'Vikas Upadhyay', position: 'Founder, Technical Development', description: 'Vikas Upadhyay is a research scholar in School of IT at IIT Delhi and Founder at IWAYPLUS.', image: p3 },
    { id: 4, name: 'Pulkit Sapra', position: 'Co-founder, Business Development', description: 'Pulkit Sapra is an IIT Delhi graduate and skilled product developer and Co-Founder at IWAYPLUS.', image: p6 },
    { id: 5, name: 'Sunita Negi', position: 'Sr. Admin and Finance', description: 'Sunita Negi is a electronics postgraduate, leading administrative cum finance activities at IWAYPLUS.', image: p4 },
    { id: 6, name: 'Mishor Patra', position: 'Web Application Developer', description: 'Mishor Patra is a electronics graduate and Senior web application developer at IWAYPLUS.', image: p5 },
  ];

  return (
    <div className="container  md:mt-20 px-4 py-8" style={{ backgroundImage: `url(${teamBackground})`,  backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <h1 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative">
            <img className="w-full h-64 object-cover object-center rounded-lg hover:brightness-75 transition duration-300" src={member.image} alt={member.name} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
              <div className="text-center text-white p-4">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-sm text-gray-200 mb-2">{member.position}</p>
                <p className="text-sm text-gray-200">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
