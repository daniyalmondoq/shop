import './App.css';
import { CartProvider } from 'react-use-cart';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageProduct from './component/Other/PageProduct';
import AddToCart from './component/Other/AddToCart';
function App() {
  return (
    <Router>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/Products" element={<PageProduct/>}/>
      <Route path='/carts' element ={<AddToCart/>}/>
      {/* <Route path ="/About" element={<Accordian/>}/>
      <Route path ="/Contact" element={<Signup/>}/> */}
      <Route path ="/Shop" element={<PageProduct/>}/>
    
    </Routes>
    </Router>
    // <CartProvider>
    //   <MainBody/>
    //   <Card/>
    // </CartProvider>
  );
}

export default App;
