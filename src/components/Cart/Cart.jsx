import React from 'react';
import PropTypes from 'prop-types';
import Incart from '../Incart/Incart';


const Cart = ({ cart, handleAddToCurrents, handleRemoveFromCart }) => {
    
    return (

        <div className='w-[514px] mt-6  rounded-3xl'>
            <h1 className='text-[24px] font-semibold text-center'>Want to cook: <span>{cart.length}</span></h1>
            <div className='border-b-2 border-gray-300 my-4'></div>
            <div className='px-4 flex gap-16'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {/* <h2 className='text-3xl'>Cart: {cart.length}</h2> */}
            {
                cart.map(incart => <Incart key={incart.id} incart={incart} handleAddToCurrents={handleAddToCurrents} handleRemoveFromCart={handleRemoveFromCart}  ></Incart>)
            }
            {/* <h1 className='text-[24px] font-semibold text-center'>Currently cooking: 02: <span>{cart.length}</span></h1> */}
            <div className='border-b-2 border-gray-300 my-4'></div>
            {/* <div>Total Time =
                45 minutes</div>
            <div>Total Calories =
                1050 calories</div> */}

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array ,
    handleAddToCurrents: PropTypes.func,
    handleRemoveFromCart: PropTypes.func,
    time: PropTypes.number
}

export default Cart;