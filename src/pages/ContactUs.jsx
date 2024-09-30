import { useState } from 'react';
import '../App.css';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const services = [
    'Frontend Development',
    'Backend Development',
    'Mobile App Development',
    'AI Development',
  ];

  const Navigation = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname,
      email,
      address,
      phone,
      services: service,
      message,
    };

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        toast.success('Message sent successfully!');
       setTimeout(()=>{
        Navigation('/');
       },1000);
      } else {
        toast.error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
          backgroundSize: '60%',
        }}
        className=" text-white font-poppins"
      >
        <div className="text-center py-5">
          <h1 className=" text-black text-xl font-bold">Contact Us</h1>
          <p className="text-xs mt-3 font-medium text-gray-800">
            We'd love to hear from you! Feel free to reach out using the form below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white lg:text-center">
              Get in Touch
            </h2>

            <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium " htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 bg-black text-sm"
                  type="text"
                  id="fullname"
                  name="fullName"
                  placeholder="Your Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 bg-black text-sm"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium " htmlFor="address">
                  Address
                </label>
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 bg-black text-sm"
                  type="text"
                  id="address"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 bg-black text-sm"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <select
                  id="services"
                  name="service"
                  required
                  className="block w-full border-b-2 px-2 py-2 border-gray-300 focus:border-r-blue-500 outline-none transition-colors duration-300 bg-black sm:text-sm"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2 text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 bg-black h-10 text-sm"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 text-sm py-3 px-6 rounded-lg shadow-lg font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
