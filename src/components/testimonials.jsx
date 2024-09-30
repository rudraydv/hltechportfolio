import React from 'react';
import saurabhImg from '../assets/images/saurabh.jpg';
import sachinImg from '../assets/images/sanchitnew.jpg';
import alokImg from '../assets/images/alok rai.JPG';
import keshavImg from '../assets/images/keshav.JPG';
import bvcImg from '../assets/images/bvc.jpg';
import vimalImg from '../assets/images/Vimal.jpg';
import yogeshImg from '../assets/images/yegesh.jpg';
import pramodkumarImg from '../assets/images/pramod kumar.jpeg';
import pujaguptaImg from '../assets/images/pujagupta.jpg';
import ramanImg from '../assets/images/raman.jpg';

const testimonials = [

  {
    text: `"I had the pleasure of working with Sujeet & his team for the development of our website at ASE Sports, and I couldn't be happier with the results. His team demonstrated exceptional expertise and creativity, transforming our vision into a stunning, user-friendly site. From the initial consultation to the final launch, they maintained clear communication and delivered on time. The site not only looks great but also performs excellently in terms of SEO, driving more traffic to our business. I highly recommend Sujeet for anyone looking for Website Development...."`,
    Image:saurabhImg,
    name: "Saurabh sharma",
    goal: " Owner : ASE Sports",
  },

  {
    text: `I am extremely pleased with the e-commerce website developed by Sujeet and his team. Their professionalism, attention to detail, and ability to understand our specific requirements made the entire process smooth and efficient. They delivered a user-friendly, visually appealing, and highly functional website that has significantly enhanced our online presence. The team's technical expertise and constant communication throughout the project ensured that all our needs were met. I highly recommend Sujeet and his team for any web development services, especially for those looking to build a robust e-commerce platform..."`,
    Image: sachinImg,
    name: "SANCHIT KWATRA",
    goal: "CEO - INDIAN FOOTWEAR MANUFACTURING & EXPORTING",
  },

  {
    text: `"I partnered with Sujeet and his team for website development, software development, and digital marketing for my algo trading business, and they exceeded my expectations. They delivered a sleek, professional website with seamless functionality, and their custom software solutions were perfectly aligned with the needs of my trading algorithms. Their digital marketing strategies have also greatly improved my online visibility in the competitive trading industry.And they generate most qualified lead from meta ads and also reduce the CPC!..".`,
    name: "Alok Rai ",
    Image:alokImg,
    goal: "Brightex Technologies Pvt. Ltd.",
  },

  {
    text: `"I engaged Sujeet and his team to develop a website for my CA/Accountant firm, and I’m extremely satisfied with the results. They delivered a clean, professional, and highly functional website that perfectly reflects the services we offer. The site is user-friendly, responsive, and tailored to our industry needs, which has helped us attract more clients. Sujeet's team was professional, efficient, and attentive to all our requirements. I highly recommend them for any business looking for top-notch website development services..."`,
    Image:keshavImg,
    name: "Keshav Sharma ",
    goal: " Managing Director : Protax Solutions",
  },


  {
    text: `"I approached Sujeet and his team for digital marketing and lead generation services for my coaching institute, and the results have been outstanding. Their strategic approach and innovative marketing tactics have significantly increased our visibility, leading to a steady flow of qualified leads.
     Thanks to their efforts, we’ve seen a noticeable improvement in student enrollment and engagement. Sujeet’s team is knowledgeable, professional, and truly understands how to deliver results in the education sector. I highly recommend their digital marketing services to any business looking to grow..."`,
    Image:bvcImg,
    name: "Kushlesh Singh Rajpoot",
    goal: "Director : Vikramshila Academy",
    
  },
  {
    text: `"I partnered with Sujeet and his team for college management software development, and I am extremely satisfied with the outcome. Their solution has simplified our administrative tasks and improved efficiency across the board. The team's professionalism and attention to detail were outstanding. I highly recommend Sujeet’s services for any educational institution in need of robust software solutions..."`,
    Image:vimalImg,
    name: "Dr. Vimal Chouksey",
    goal: "Principal  : DBSR College",
  },

  {
    text: `"I collaborated with Sujeet and his team for the development of a web portal for my logistics business, and the experience has been outstanding. They delivered a robust, feature-rich platform tailored to the specific needs of the logistics industry, helping us streamline operations and improve efficiency. The portal is user-friendly, scalable, and seamlessly integrates with our existing systems. Sujeet’s team demonstrated professionalism, technical expertise, and a deep understanding of our business requirements. I highly recommend their services to anyone looking for reliable and innovative web development solutions..."`,
    name: "Yogesh Tatyaram Mengade ",
    Image:yogeshImg,
    goal: "Founder : YEdheshwari Logistics Pvt. Ltd.",
  },

 
  {
    text: `"I hired Sujeet and his team to develop a website for my e-commerce business, and the results were excellent. They created a high-performance, visually appealing site that has streamlined our operations and improved customer satisfaction. Their team understood our vision and delivered a solution that met all our needs. The project was completed on time, and the communication was seamless throughout. I highly recommend their web development services to anyone looking to build a powerful e-commerce platform...."`,
    Image:pramodkumarImg,
    name: "Pramod Kumar",
    goal: "Managing Director : Defynd Footwear Industries",
  },

  {
    text: `"I recently partnered with Sujeet Kumar Singh for our digital marketing needs. His expertise has been transformative for my business. From enhancing our online presence to driving targeted traffic to our sociall media plateforms with google my business, their tailored strategies have significantly increased our client engagement and bookings.His team is professional, responsive, and truly understands the skincare industry. I highly recommend Sujeet for anyone looking to elevate their digital marketing efforts. They have helped my clinic thrive in a competitive market!".`,
    Image:pujaguptaImg,
    name: "Dr. puja Gupta",
    goal: " MD : Skincare Clinic Bhopal ",
  },
  
  {
    text: `"I entrusted Sujeet with digital marketing services, including social media marketing and management, and I couldn’t be more satisfied. Their strategic approach to social media has boosted our brand presence across multiple platforms, engaging our audience and driving more traffic to our business. Their ability to create and manage content, run effective campaigns, and monitor results has been invaluable. Sujeet’s team is professional, responsive, and highly skilled in digital marketing. I highly recommend their services for any business looking to elevate its online presence..."`,
    name: "Raman Agrwal",
    Image:ramanImg,
    goal: "Wisshy",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="text-red-500 text-xl font-medium mb-2">Testimonials</div>
      <h1 className="text-3xl font-medium mb-8">Hear it from the Clients</h1>

      {/* Grid Layout for Testimonials */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50/70 p-6 rounded-lg shadow-xl space-y-4 border border-gray-400 hover:rotate-2  text-gray-800 hover:shadow-2xl hover:shadow-gray-600 hover:bg-black hover:text-white duration-500">
            {/* Testimonial Text */}
            <p className=" font-medium italic text-xs lg:h-32">{testimonial.text}</p>

            {/* Client Info */}
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 border-[1.4px] border-gray-200 rounded-md">
                <img src={testimonial.Image} alt="" className='p-[2px] w-12 h-11' />
                </div> {/* Placeholder for Avatar */}
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs font-semibold">{testimonial.goal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-red-600 duration-500">
          View All
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
