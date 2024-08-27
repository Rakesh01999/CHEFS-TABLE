import React from 'react';
import PropTypes from 'prop-types';
import Incart from '../Incart/Incart';

const Cart = ({ cart, handleAddToCurrents, handleRemoveFromCart }) => {
    return (
        <div className="w-full md:w-[514px] mt-6 bg-white p-4 rounded-3xl shadow-lg">
            <h1 className="text-[20px] md:text-[24px] font-semibold text-center">
                Want to cook: <span className="text-teal-600">{cart.length}</span>
            </h1>
            <div className="border-b-2 border-gray-300 my-4"></div>
            {/* <div className="px-4 flex justify-between text-[14px] md:text-[16px] font-medium text-gray-700"> */}
            <div className="px-5 flex gap-6 md:gap-16 text-[14px] md:text-[16px] font-medium text-gray-700">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p>Cook</p>
            </div>
            {/* <div className="mt-4 space-y-4"> */}
            <div className="mt-4 gap-20">
                {cart.map((incart) => (
                    <Incart
                        key={incart.id}
                        incart={incart}
                        handleAddToCurrents={handleAddToCurrents}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                ))}
            </div>
            <div className="border-b-2 border-gray-300 my-4"></div>
            {/* Optional total time and calories display */}
            {/* <div className="text-center text-gray-700">
                <p>Total Time: <span className="font-bold">45 minutes</span></p>
                <p>Total Calories: <span className="font-bold">1050 calories</span></p>
            </div> */}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleAddToCurrents: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
