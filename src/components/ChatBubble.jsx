import React from 'react';

const ChatBubble = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      {/* Message from the user */}
      <div className="flex items-start space-x-3 rotate-3 hover:-rotate-3 duration-300">
        <img
          src="https://framerusercontent.com/images/r8seb6hHOEC8tHmnCiDmRJ36BbA.png?scale-down-to=512" // Replace with the user's avatar URL
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="bg-white text-black font-medium p-2  text-xs rounded-bl-full shadow-md w-full border-[1.2px] border-gray-200">
          <p>
            Hello! 👋 I wanted to know more about your coaching programs.
          </p>
        </div>
      </div>

      {/* Response message */}
      <div className="flex items-end space-x-3 self-end rotate-3 hover:-rotate-3 duration-500">
        <div className="bg-purple-600 text-white p-2 rounded-t-2xl text-xs font-medium rounded-bl-2xl shadow-md w-full">
          <p>
            Hey! Definitely, Let's connect this week.
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/lthZ9DuxL6UKoCovYaHbYLZQLo.jpeg" // Replace with the coach's avatar URL
          alt="Coach"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default ChatBubble;
