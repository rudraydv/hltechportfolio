import React from 'react';
import Layout from '../../components/Layout';

const Blog1 = () => {
  return (
  <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-bold mb-4">The Future of Web Development: Trends to Watch Introduction</h1>
        <div className="flex items-center space-x-4 text-gray-500 text-xs font-medium">
          <div className="flex items-center space-x-1">
            <span className="material-icons">event</span>
            <span>Sep 26, 2024</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-icons">schedule</span>
            <span>6 Min Read</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6 space-y-3 text-gray-900">
        {/* 1. Rise of Progressive Web Apps (PWAs) */}
        <h2 className="text-xl font-semibold">1. Rise of Progressive Web Apps (PWAs)</h2>
        <p className=''>Benefits of PWAs: offline access, faster load times, and improved user engagement.</p>

        {/* 2. Jamstack Architecture */}
        <h2 className="text-xl font-semibold">2. Jamstack Architecture</h2>
        <p>Explanation of Jamstack and its advantages for performance and security.</p>

        {/* 3. Artificial Intelligence and Automation */}
        <h2 className="text-xl font-semibold">3. Artificial Intelligence and Automation</h2>
        <p>
        How AI is transforming web development processes and enhancing user experiences.</p>

        {/* 4. Accessibility and Inclusivity */}
        <h2 className="text-xl font-semibold">4. Accessibility and Inclusivity</h2>
        <p>Importance of building accessible websites and best practices.</p>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>
        Encouragement to embrace these trends for future-proof web development.</p>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Write your comment here..."
              className="border border-gray-300 rounded-md p-2 w-full "
            />
          </div>
          <button
            type="submit"
            className="bg-gray-700 text-white rounded-md px-6 py-2 mt-4 hover:bg-gray-800"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  </Layout>
  );
};

export default Blog1;
