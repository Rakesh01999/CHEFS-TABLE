import React from 'react';

const Banner = () => {
  return (
    // <div className="container mx-auto relative w-full h-screen bg-gray-900">
    <div className="container mx-auto relative w-full md:h-[600px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[url(assets/banner.png)] bg-no-repeat"
        // style={{ backgroundImage: "url(assets/banner.png)" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-300 animate-fade-in-up">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 border border-transparent mb-2 w-24 h-14 md:w-52 md:h-16 flex justify-center items-center text-center text-base font-medium rounded-full text-black bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Explore Now
            </button>
            <button className="px-8 py-3 border border-transparent w-24 h-14 md:w-52 md:h-16 flex justify-center items-center text-center text-base font-medium rounded-full text-white bg-opacity-0 hover:bg-white hover:bg-opacity-10 border-white md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Our Feedback
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
