import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";


const plans = [
  {
    title: "Web Develepment",
    description: "Web development involves creating and maintaining websites, focusing on functionality and user experience.",
    price: "Starting from 19,999 /-",
    features: [
      "Custom Design Solutions",
      "Responsive and Mobile-Friendly Design",
      "SEO Optimization",
      "Scalability and Flexibility",
      "Ongoing Support and Maintenance"
    ]
  },
  {
    title: "App Develepment",
    description: "App development focuses on creating software applications for mobile or web platforms to enhance user engagement.",
    price: "Starting from 49,999 /-",
    features: [
      "Custom Solutions",
      "Cross-Platform Compatibility",
      "Optimized Performance",
      "Advanced Security",
      "Post-Launch Support"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Our team is experienced in AI, data analysis, machine learning, and implementing cutting-edge technologies.",
    price: "Starting from 11,999 /-",
    features: [
      "Cost-Effective Lead Generation",
      "Improved ROI",
      "Personalized Marketing",
      "Faster Customer Feedback",
      "Consistent 1-on-1 Support"
    ]
  },
  {
    title: "IT Consultancy",
    description: "Expert guidance in technology to enhance business efficiency and achieve strategic goals.",
    price: "Free",
    features: [
      "Expert Guidance",
      "Cost Efficiency",
      "Strategic Planning",
      "Risk Management",
      "Technology Integration"
    ]
  }
];

const PricingPlans = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header */}
      <div className="text-purple-500 text-xl font-medium mb-2">Plans</div>
      <h1 className="text-3xl font-semibold mb-6">Get Services by Me</h1>

      {/* Grid of Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-5 bg-white shadow-md hover:shadow-xl hover:shadow-orange-50">
            <h2 className="text-2xl font-medium mb-4">{plan.title}</h2>
            <p className="text-gray-700 font-medium mb-4">{plan.description}</p>
            <p className="text-2xl font-medium mb-6">{plan.price}</p>
            <hr className='h-6' />
            
            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-800 font-medium">
                  <span className=" mr-2 text-2xl text-green-600 font-bold"><IoIosCheckmarkCircleOutline/></span> {feature}
                </li>
              ))}
            </ul>
            
            {/* Enroll Button */}
            <a href='tel:+91-9199025109' className="bg-black/85 text-white py-2 px-6 rounded-lg w-full hover:bg-gray-800 hover:text-yellow-500 hover:scale-105 duration-500 flex items-center justify-center gap-2">
  <MdOutlineWifiCalling3 size={17} /> 
  Let's talk
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
