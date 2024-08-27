import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';
import Recipes from './components/Recipes/Recipes';
import Title from './components/Title/Title';
import Currents from './components/Currents/Currents';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // --------- State for the cart --------------
  const [cart, setCart] = useState([]);

  const handleAddToCart = (recipe) => {
    const isAlreadyInCart = cart.some(item => item.recipe_id === recipe.recipe_id);
    if (isAlreadyInCart) {
      toast.error('This recipe is already in your cart!');
    } else {
      setCart([...cart, recipe]);
    }
  };

  // ---------- State for currently cooking --------------
  const [currents, setCurrents] = useState([]);
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const handleAddToCurrents = (incart, preparing_time, calories) => {
    setCurrents([...currents, incart]);
    setCart(cart.filter(item => item.recipe_id !== incart.recipe_id));
    setTime(time + preparing_time);
    setCalorie(calorie + calories);
  };

  return (
    <>
      <Nav />
      <Banner />
      <Title />
      <div className='md:flex md:gap-8'>
      {/* <div className='flex md:gap-8'> */}
        <Recipes handleAddToCart={handleAddToCart} />
        <div className='w-full md:w-[514px] border border-solid border-gray-300 rounded-2xl mt-6 md:mt-10 p-4 bg-white shadow-lg'>
          <Cart 
            handleAddToCurrents={handleAddToCurrents} 
            cart={cart} 
          />
          <Currents 
            currents={currents} 
            time={time} 
            calorie={calorie} 
          />
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
