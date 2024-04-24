import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can send the form data to your backend or handle it in any way you prefer
  };

  return (
    <div className="container mx-auto md:mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CONTACT</h1>
      <p className="mb-6">Let's get in touch. Send us a message:</p>

      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-bold">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" required />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" required />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-bold">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" required />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-bold">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" rows="4" required />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Privacy Policy</h2>
        <p className="mb-4">3A-2/B, Research and Innovation Park, IIT Delhi, New Delhi -110016</p>
        <p className="mb-4">Phone: 011 2659 6080</p>
        <p className="mb-4">Email: inwayplus@gmail.com</p>
      </div>
      <div className='border border-red-700'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8690573124063!2d77.1854124743962!3d28.54365527571335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9a6426d987%3A0x48afdc51e54c8134!2sResearch%20and%20Innovation%20Park%20(RNI)%20-%20IIT%20DELHI!5e0!3m2!1sen!2sin!4v1713879115875!5m2!1sen!2sin" 
      width="100%" 
      height="200" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

       </iframe>
      </div>
    </div>
  );
};

export default Contact;
