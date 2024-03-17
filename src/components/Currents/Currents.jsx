import React from 'react';
import PropTypes from 'prop-types';
import Current from '../Current/Current';

const Currents = ({ currents }) => {
    return (
        <div className='w-[514px] mt-6 border-solid border-gray-400 rounded-3xl'>
            <h1 className='text-[24px] font-semibold text-center'>Currently cooking:<span>{currents.length}</span></h1>
            <div className='border-b-2 border-gray-300 my-4'></div>
            <div className='px-4  flex gap-16'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {/* <h2 className='text-3xl'>Cart: {cart.length}</h2> */}
            {
                // currents.map(incart => <Incart key={incart.id} incart={incart}></Incart>)
                currents.map(current => <Current key={current.id} current={current}></Current>)
            }
            <div className='border-b-2 border-gray-300 my-4'></div>
            <div>Total Time =
                45 minutes</div>
            <div>Total Calories =
                1050 calories</div>

        </div>
    );
};

Currents.propTypes = {
    Currents: PropTypes.array
}

export default Currents;