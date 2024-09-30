import React from 'react';
import Layout from '../../components/Layout';

const Blog3 = () => {
  return (
  <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-bold mb-4">Digital Marketing Strategies for 2024 Introduction</h1>
        <div className="flex items-center space-x-4 text-gray-500 text-xs font-medium">
          <div className="flex items-center space-x-1">
            <span className="material-icons">event</span>
            <span>Sep 19, 2024</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-icons">schedule</span>
            <span>20 Min Read</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6 space-y-3 text-gray-900">
        {/* 1. Rise of Progressive Web Apps (PWAs) */}
        <h2 className="text-xl font-semibold">1. Personalization and Customer Experience</h2>
        <p className=''>The shift towards personalized content and its impact on user engagement.</p>

        {/* 2. Jamstack Architecture */}
        <h2 className="text-xl font-semibold">2. Video Marketing Trends</h2>
        <p>Growing importance of video content in digital marketing strategies.</p>

        {/* 3. Artificial Intelligence and Automation */}
        <h2 className="text-xl font-semibold">3. Voice Search Optimization</h2>
        <p>How voice search is changing SEO and content creation.</p>

        {/* 4. Accessibility and Inclusivity */}
        <h2 className="text-xl font-semibold">4. Data-Driven Decision Making</h2>
        <p>The role of analytics in shaping effective marketing strategies.</p>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p>Emphasis on adapting to these trends for successful digital marketing.</p>
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

export default Blog3;
