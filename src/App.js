import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import swords from './swordsList';
import { useEffect, useState } from 'react';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addCartItems = (newList) => {
    setCartItems(newList);
  };

  const resetCartItems = () => {
    setCartItems([]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Router>
      <div className='main-container'>
        <NavBar toggleCart={toggleCart} />

        <Routes>
          <Route
            path='/shop'
            element={
              <Shop
                swords={swords}
                addCartItems={addCartItems}
                cartItems={cartItems}
              />
            }
          />
          {/* <Route path='/shopping-cart' element={<ShoppingCart />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
        <ShoppingCart
          isCartVisible={isCartVisible}
          cartItems={cartItems}
          setCartItems={setCartItems}
          resetCartItems={resetCartItems}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
