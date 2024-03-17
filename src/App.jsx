// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import Recipes from './components/Recipes/Recipes'
import Title from './components/Title/Title'
import Recipe from './components/Recipe/Recipe'
import Incart from './components/Incart/Incart'
import Currents from './components/Currents/Currents'
import Toast from './components/Toast/Toast'


function App() {
  // ---------for want to cook add--------------
  const [cart, setCart] = useState([]);

  const handleAddToCart = recipe => {
    // console.log('cart add');
    // console.log(recipe);
    // const newCart = [...cart, recipe];
    // setCart(newCart);

    // --------------
    // const alreadyExist = cart.find(c=> c.id == recipe.id);
    // if(!alreadyExist){
    //   // setCart(newCart);
    //   // setCart(c=> [...c, recipe]);
    // }
    // --------------
    const isAlreadyInCart = cart.some(item => item.recipe_id === recipe.recipe_id);
    if (isAlreadyInCart) {
      // toast.error('This recipe is already in your cart!', {
      //   position: 'bottom-right',
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });

      <Toast></Toast>
    } 
    else {
      const newCart = [...cart, recipe];
      setCart(newCart);
    }

  }

  const handleRemoveFromCart = id => {

  }

  // ----------for current add -------------------

  const [currents, setCurrents] = useState([]);

  const handleAddToCurrents = incart => {
    // console.log('incart add');
    console.log(incart);
    // add
    const newCurrents = [...currents, incart];
    setCurrents(newCurrents);
    // remove
    // const remainCart = cart.filter(incart => incart.id !==id);
    // setCart(remainCart);
    const updatedCart = cart.filter(item => item.recipe_id !== incart.recipe_id);
    setCart(updatedCart);

  }

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Title></Title>
      <div className='md:flex '>
        <Recipes handleAddToCart={handleAddToCart}></Recipes>
        <div>
          <Cart handleAddToCurrents={handleAddToCurrents} handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
          <Currents currents={currents}></Currents>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
