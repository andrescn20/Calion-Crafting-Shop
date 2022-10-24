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
  const [shopList] = useState(swords); //Creates a copy of the external product List for app usage
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

  const modifyCart = (currentItem, btnSelection) => {
    let newCartList = cartList.map((item) => {
      if (item.name === currentItem.name) {
        return { ...item, quantity: item.quantity + Number(btnSelection) };
      } else {
        return { ...item };
      }
    });

    let toBeRemoved;

    newCartList.forEach((item) => {
      if (item.quantity <= 0) {
        toBeRemoved = newCartList.indexOf(item);
      }
      console.log(toBeRemoved);
    });
    if (toBeRemoved === 0) {
      newCartList.shift();
      setCartList(newCartList);
    }
    if (toBeRemoved > 0) {
      newCartList.splice(toBeRemoved, 1);
      setCartList(newCartList);
    } else {
      setCartList(newCartList);
    }
  };

  useEffect(() => {
    const quantityArray = cartList.map((item) => {
      return item.quantity;
    });
    const newGlobalQuantity = quantityArray.reduce(
      (prev, current) => prev + current,
      0
    );
    setGlobalQuantity(newGlobalQuantity);
  }, [cartList]);

  const cleanCart = () => {
    setCartList([]);
  };

  const resetCart = () => {
    const reset = cartList.map((item) => {
      return { ...item, quantity: 0 };
    });

    setCartList(reset);
    cleanCart();
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
          modifyCart={modifyCart}
          resetCart={resetCart}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
