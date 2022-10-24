import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import swords from './swordsList';
import { useEffect, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [shopList, setShopList] = useState(swords); //Creates a copy of the external product List for app usage
  const [globalQuantity, setGlobalQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);

  //Set visitbility of Cart on/off. Cart is not rendered but showed or hidden
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  //Called when adding to cart or changing buying quantity
  const updateCartList = (currentItem) => {
    let newCartList;
    let isRepeated = false;

    if (cartList.length === 0) {
      newCartList = [{ ...currentItem, quantity: 1 }];
    } else {
      newCartList = cartList.map((item) => {
        if (item.name === currentItem.name) {
          isRepeated = true;
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
      if (isRepeated === false) {
        newCartList = [...cartList, { ...currentItem, quantity: 1 }];
      }
    }
    setCartList(newCartList);
  };

  // useEffect(() => console.log(cartList), [cartList]);

  useEffect(() => {
    const quantityArray = shopList.map((item) => {
      return item.quantity;
    });
    const newGlobalQuantity = quantityArray.reduce(
      (prev, current) => prev + current
    );
    setGlobalQuantity(newGlobalQuantity);
  }, [shopList]);

  const resetCart = () => {
    const reset = cartList.map((item) => {
      return { ...item, quantity: 0 };
    });

    setShopList(reset);
  };

  return (
    <Router>
      <div className='main-container'>
        <NavBar toggleCart={toggleCart} globalQuantity={globalQuantity} />

        <Routes>
          <Route
            path='/shop'
            element={
              <Shop
                shopList={shopList}
                updateCartList={updateCartList}
                globalQuantity={globalQuantity}
              />
            }
          />
          <Route path='/' element={<Home />} />
        </Routes>

        <ShoppingCart
          isCartVisible={isCartVisible}
          cartList={cartList}
          resetCartItems={resetCart}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
