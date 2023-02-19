import React from 'react'
import { CartProvider } from 'react-use-cart'
import NavBar from '../NavBar'
import Fetch from '../ShopingCard/Fetch'
import AddToCart from './AddToCart'
// import Product from './Product'

function PageProduct() {
  return (
    <>
    <NavBar/>
    <h1 className=" h2 text-center my-3"> Shoping Page</h1>

    <hr className="bg-danger border-2 border-top border-info" />
    <CartProvider>
    <Fetch/>
    {/* <Product/> */}
    <AddToCart/>
    </CartProvider>
    

    </>
  )
}

export default PageProduct