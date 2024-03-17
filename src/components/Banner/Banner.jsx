import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="md:container md:mx-auto">
                {/* <div class="bg-[url(assets/banner.png)] h-[550px] w-[1171px] mx-auto"> */}
                <div class="w-[384px] h-[600px] md:w-[1320px] md:h-[600px] bg-[url(assets/banner.png)] bg-no-repeat mt-2 mx-10 md:mx-20">
                    <div class="px-1 py-10 md:py-28 mx-12 md:mx-52 mt-16 w-[200px] h-[200px] md:w-[742px] md:h-[345px] ">
                        <h1 class="text-[#FFFFFF] font-extrabold w-[200px] h-[200px] md:w-[897px] text-[28px] md:text-[52px] text-center"> Discover an exceptional cooking class tailored for you! </h1>
                        {/* <h3 class="text-center text-[#1DD100] font-extrabold text-[64px]">P Paribahan</h3> */}
                        <p class="text-gray-200 w-[200px] md:w-[933px] text-center text-[18px]">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div class="md:mx-72 mt-8 md:flex md:gap-7">
                            <button
                                class="btn bg-[#0BE58A] w-[170px] h-[65px] border-none rounded-full text-[20px] font-semibold">Explore Now
                            </button>
                            <button class="btn btn-ghost border-white w-[170px] h-[65px] rounded-full text-[20px] font-semibold text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;