import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='w-[514px] mt-6 border-solid border-gray-400 rounded-3xl'>
            <h1 className='text-[24px] font-semibold text-center'>Want to cook: <span>0</span></h1>
            <div className='border-b-2 border-gray-300 my-4'></div>
            <h2 className='text-3xl'>Cart: {cart.length}</h2>
        </div>
    );
};

export default Cart;