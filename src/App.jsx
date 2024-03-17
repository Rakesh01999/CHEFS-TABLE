// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import Recipes from './components/Recipes/Recipes'
import Title from './components/Title/Title'
import Recipe from './components/Recipe/Recipe'


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = recipe => {
    // console.log('cart add');
    // console.log(recipe);
    const newCart = [...cart, recipe];
    setCart(newCart) ;
  }
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Title></Title>
      <div className='md:flex '>
        <Recipes handleAddToCart={handleAddToCart}></Recipes>
        <Cart cart={cart}></Cart>
      </div>
    </>
  )
}

export default App
