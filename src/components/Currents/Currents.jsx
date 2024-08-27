import React from 'react';
import PropTypes from 'prop-types';
import Current from '../Current/Current';

const Currents = ({ currents, time, calorie }) => {
    return (
        <div className='w-[514px] mt-6'>
            <h1 className='text-[24px] font-semibold text-center'>Currently cooking:<span>{currents.length}</span></h1>
            <div className='border-b-2 border-gray-300 my-4'></div>
            <div className='px-4 flex gap-20'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {/* <ol className='list-decimal'>{ */}
            <ol style={{ listStyleType: 'decimal' }}>{
                // currents.map(incart => <Incart key={incart.id} incart={incart}></Incart>)
                currents.map(current => <Current key={current.id} current={current}></Current>)
            }</ol>
            <div className='border-b-2 border-gray-300 my-4'></div>
            <div className='flex gap-10 ml-36 w-[250px]'>
                <div className='font-semibold'>Total Time =
                    {time} minutes</div>
                <div className='font-semibold'>Total Calories =
                    {calorie} calories</div>
            </div>

        </div>
    );
};

Currents.propTypes = {
    Currents: PropTypes.array,
    time: PropTypes.number.isRequired,
    calorie: PropTypes.number
}

export default Currents;