import React from 'react';

const services = [
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites, focusing on functionality and user experience.",
    tags: ["Front-End Development", "Back-End Development", "E-commerce Solutions", "Website Maintenance"],
    image: "https://hltechindia.com/wp-content/uploads/2024/05/s-3.svg", 
  },
  {
    title: " App Development",
    description:
      "App development focuses on creating software applications for mobile or web platforms to enhance user engagement.",
    tags: ["React Native", "Flutter", "Java", "Kotlin", "Swift"],
    image: "https://hltechindia.com/wp-content/uploads/2024/05/s-1.svg",
  },
  
  {
    title: "Digital Marketing",
    description:
      "Our team is experienced in AI, data analysis, machine learning, and implementing cutting-edge technologies.",
    tags: ["Social Media Marketing", "Meta & Google ads"," Lead generation", "Content Marketing", "Video Marketing", "Influencer Marketing"],
    image: "https://hltechindia.com/wp-content/uploads/2024/05/s-6.svg", 
  },

  {
    title: "IT Consultancy",
    description:
      "Expert guidance in technology to enhance business efficiency and achieve strategic goals.",
    tags: ["Cloud Solutions", "Cybersecurity Services", "Software Development", "IT Strategy Planning", "System Integration"],
    image: "https://hltechindia.com/wp-content/uploads/2024/05/s-2.svg", 
  },
];

const ServiceCard = ({ title, description, tags, image }) => {
  return (
    <div  style={{
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://framerusercontent.com/images/TrJJuQ7sufSwUY5KvVdTUvR1xI.svg?scale-down-to=1024')",
      backgroundSize: "90%",
    }}
     className="bg-white bg-cover bg-center rounded-lg shadow-md p-6 flex justify-between items-center space-x-4 hover:shadow-xl transition duration-500 hover:scale-105 border-[2px] border-gray-200 h-full">
      {/* Left Side Text */}
      <div className="flex-1">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className=" text-xs font-medium text-gray-800 mb-4">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag,index) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 font-bold text-[8px] rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="bg-black text-white px-2 py-1 text-xs hover:bg-gray-800 rounded-lg font-semibold">
          Know more →
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-1/3">
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service,index) => (
            <div>
              <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              tags={service.tags}
              image={service.image}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
