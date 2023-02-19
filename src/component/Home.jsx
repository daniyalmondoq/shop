import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Footer from './Footer'
import NavBar from './NavBar'
import Product from './Other/Product'
// import Fetch from './ShopingCard/Fetch'
import Fetch from './ShopingCard/Fetch'

import Slidder from './Slidder'

function Home() {
  return (
    <>
    <NavBar/>
    <Slidder/>

    {/* <CartProvider>
    <Product/>
    </CartProvider> */}
     <h1 className="h2 text-center my-3">
          {" "}
          New Arrival{" "}
          <Link to={"/Products"}>
          <button type="button" class="btn btn-outline-primary float-end">
            Go To Shop
          </button>
          </Link>
          </h1>
          <hr className="bg-danger border-2 border-top border-info" />    
    <Fetch/>
    {/* <Footer/> */}
    </>
  )
}

export default Home