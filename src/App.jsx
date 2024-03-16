// import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Recipes from './components/Recipes/Recipes'
import Title from './components/Title/Title'


function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Title></Title>
      <Recipes></Recipes>
    </>
  )
}

export default App
