import React from 'react';
import bookImg1 from '../assets/images/book1.png'
import bookImg2 from '../assets/images/book2.png'
import bookImg3 from '../assets/images/book3.png'


const books = [
  {
    id: 1,
    image: bookImg1, 
  },
  {
    id: 2,
    image: bookImg2, 
  },
  {
    id: 3,
    image: bookImg3, 
  },
];

const BookGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto ">
        <h2 className="text-xl text-purple-600 font-medium mb-2">Books</h2>
        <h2 className="text-3xl font-medium text-black mb-4">Books I Recommend</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {books.map((book) => (
            <div key={book.id} className="group relative bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400">
              <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookGallery;
