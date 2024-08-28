import React from 'react';
import PropTypes from 'prop-types';
import Current from '../Current/Current';

const Currents = ({ currents, time, calorie }) => {
    return (
        <div className="w-full md:w-[514px] mt-6 bg-white p-4 rounded-3xl shadow-lg">
            <h1 className="text-[20px] md:text-[24px] font-semibold text-center">
                Currently cooking: <span className="text-teal-600">{currents.length}</span>
            </h1>
            <div className="border-b-2 border-gray-300 my-4"></div>
            <div className="px-5 flex gap-10 md:gap-20 text-[14px] md:text-[16px] font-medium text-gray-700">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <ol className="mt-4 gap-20 list-decimal list-inside">
                {currents.map(current => (
                    <Current key={current.id} current={current} />
                ))}
            </ol>
            <div className="border-b-2 border-gray-300 my-4"></div>
            {/* <div className="flex justify-between items-center text-[16px] font-semibold text-gray-700"> */}
            <div className="flex ml-24 md:ml-36 items-center text-[16px] font-semibold text-gray-700">
                <div>Total Time: <span className="text-teal-600">{time} minutes</span></div>
                <div>Total Calories: <span className="text-teal-600">{calorie} kcal</span></div>
            </div>
        </div>
    );
};

Currents.propTypes = {
    currents: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
    calorie: PropTypes.number.isRequired,
};

export default Currents;
