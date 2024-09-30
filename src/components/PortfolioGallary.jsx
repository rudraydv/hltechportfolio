import React from 'react';
import gallaryImg1 from '../assets/images/gallary1.png';
import gallaryImg2 from '../assets/images/gallary2.jpg';
import gallaryImg3 from '../assets/images/gallary3.jpg';
import gallaryImg4 from '../assets/images/gallary4.jpg';


const PortfolioGallery = () => {
  const portfolioItems = [
    { id: 1, image: gallaryImg1, title: 'Sujeet' },
    { id: 2, image: gallaryImg2, title: 'Sujeet' },
    { id: 3, image: gallaryImg3, title: 'Sujeet' },
    { id: 4, image: gallaryImg4, title: 'Sujeet' },

  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-medium text-purple-600 mb-2">
         Gallary
        </h2>
        <h1 className="text-3xl font-medium mb-4">Some Moments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg border-[2px] border-gray-400">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm">Explore our gallery for inspiration and share your favorite quotes!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
