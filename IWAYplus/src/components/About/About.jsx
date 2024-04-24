import React from 'react';
import demoGif from '../../assets/demo.gif';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStreetView,faHeart,faMap, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons'
import './About.css'; 
import back from '../../assets/back.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';





const About = () => {

  return (

    <div className="container mt-20 md:mt-27 mx-auto px-4 py-2">
    <h1 className='text-xl font-semibold text-center rgg'>INDOOR WAYFINDING FOF ALL</h1>
    <br/>
          <img src={demoGif} alt="Demo" className="w-full border border-gray-300 rounded-lg mb-8"/>
      <h1 className="text-3xl font-bold mb-4 text-center">ABOUT IWAYPLUS</h1>
      <p className="mb-4">IWAYPLUS, originating from the Assistech Lab at the Indian Institute of Technology Delhi, offers a solution to generate geocoded indoor maps and positioning signature for large indoor spaces such as Hospitals, Airports, Academic Campuses, Malls, etc. Our technology can help businesses in tracking and managing staff, assets, and crowds. For visitors, IWAYPLUS offers personalized wayfinding assistance to enhance their experience.</p>
     
      {/* journey */}
      <div className="flex justify-between mx-4 md:mx-auto max-w-7xl">

      <div className="w-full border border-gray-500 rounded-lg md:w-1/2 px-4 mb-4 md:mx-2">
      <FontAwesomeIcon icon={faStreetView} className='h-10 ml-20 mt-6'/>
      <h2 className="text-xl text-center font-bold mb-2">Journey</h2>
      <p className="mb-4">We have successfully tested our mapping and navigation solution at 6+ buildings, with 20+ annotators. IWAYPLUS is ready to scale now. Our preliminary trials show that our wayfinding solution reduces 50% of navigation problems and saved 1000+ hours of patient's and hospital staffs. Till date, IWAYPLUS has covered 5,00,000 sq. feet of overall area, and 3000+ geocoded indoor landmarks.</p>
      </div>
      {/* passion */}
      <div className="w-full border border-gray-500 rounded-lg  md:w-1/2 px-4 mb-4 md:mx-2 ">
      <FontAwesomeIcon icon={faHeart} className='h-10 ml-20 mt-6'/>

      <h2 className="text-xl text-center font-bold mb-2">Passion</h2>
      <p className="mb-4">The growing infrastructure and services result in a surge of information, causing difficulties in wayfinding, tracking, and delivering services. This is due to several reasons, including inadequate wayfinding signs, the absence of geocoded indoor maps, and the lack of positioning signatures to validate indoor landmarks as GPS is unreliable for indoors. People spend time searching for a desired location and feel stressed, as a result. In a fire evacuation scenario in a high-rise building, our solution can guide individuals to emergency exits and track their positioning inside the building.</p>
      </div>
      {/* solution */}
      <div className="w-full border border-gray-500 rounded-lg md:w-1/2 px-4 mb-4 md:mx-2">
      <FontAwesomeIcon icon={faMap} className='h-10 ml-20 mt-6'/>

      <h2 className="text-xl text-center font-bold mb-2">Solution</h2>
      <p className="mb-4">IWAYPLUS have developed a mapping tool and have three key differentiators, 1) Custom APIs for offers high resolution geocoded indoor maps, 2) Routing and captioning APIs to support wayfinding, 3) Positioning signature APIs for authentication of digital address. IWAYPLUS do not require global map subscription resulting in lower cost, and offers a seamless multi-floor/multi-building wayfinding to ensure seamless delivery of services.</p>
      </div>
      {/* mp */}
      <div className="w-full border border-gray-500 rounded-lg md:w-1/2 px-4 mb-4 md:mx-2">
      <FontAwesomeIcon icon={faChartLine} className='h-10 ml-20 mt-6'/>

      <h2 className="text-xl text-center font-bold mb-2">Market Potential</h2>
      <p className="mb-4">India's indoor mapping and wayfinding market are expected to grow at ~32% CAGR (Ref. MRFR), driven by structural changes and digital transformation. IWAYPLUS has strategically identified the highest potential and application of mapping in public spaces (~ 70% of TAM size of indoor mapping business spectrum). IWAYPLUS offers a simple pricing model based on venue size. For a high resolution geocoded indoor maps and APIs, organization only pays for mapped area at INR 3 to 5/sq. feet. Although they can opt for a customized services at different price point.</p>
       </div>
       {/* achievement */}
       <div className="w-full border border-gray-500 rounded-lg md:w-1/2 px-4 mb-4 md:mx-2">
       <FontAwesomeIcon icon={faTrophy} className='h-10 ml-20 mt-6'/>

      <h2 className="text-xl text-center font-bold mb-2">Achievements</h2>
      <p className="mb-4">IWAYPLUS have received investment from AIIMS, WHO-SEARO to conduct pilots and generated more than 6 publications. Our IP position is under process. Iwayplus also won the Inclusive city award from the ministry of housing and urban affairs. Recently, won an OCTANE challenge in the GIS category and got acknowledged for investment from STPI. IWAYPLUS is incubated at R & I part in IIT Delhi and have already received expressions of interest from AIIMS Delhi and Jammu for implementation.</p>
       </div>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg bg-zinc-300">
  <p className="text-lg font-bold mb-2 text-center">We know Accessibility</p>
  <div className="flex items-center justify-between">
    <p className="flex-1 pr-4">
      How many times you find it difficult to locate a washroom, meeting room in a corporate office, exit from a shopping mall, or specific section in a hospital. During our visit to unfamiliar location we found it difficult to access personalized wayfinding information like where do I go? how do I get there?. Failing to get this information can result in stress, anxiety, and confusion. Based on preliminary study data, ~80% of people require wayfinding assistance in unfamiliar spaces and ~20% reported poor wayfinding experience because of miscommunication. The situation is even worse for people with disabilities.
    </p>
    <img src={back} alt='' className="w-100 h-52 border-black rounded-lg"/>
  </div>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
  <NavLink
    to="/work"
    activeClassName="text-yellow-500"
    onClick={() => handleClick('/work')}
  >
    View Our Work
  </NavLink>
</button>
</div>

    </div>
  );
};

export default About;
