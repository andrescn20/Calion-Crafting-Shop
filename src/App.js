import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import swords from './data/swordsList';
import { useEffect, useState } from 'react';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState('start');
  const [shopList] = useState(swords); //Creates a copy of the external product List for app usage
  const [globalQuantity, setGlobalQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [background, setBackground] = useState('home');
  const [totalPrice, setTotalPrice] = useState(0);

  //Set visitbility of Cart on/off. Cart is not rendered but showed or hidden
  const toggleCart = () => {
    if (isCartVisible === 'start') {
      setIsCartVisible(true);
    } else {
      setIsCartVisible(!isCartVisible);
    }
  };

  //Changes Classes to update Background dependant of page
  const updateBackground = (currentPage) => {
    setBackground(currentPage);
  };

  //Adds the item to the CartList
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

  useEffect(() => {
    let cleanPriceList = cartList.map((item) => {
      return item.quantity * item.price.replace('$', '');
    });

    setTotalPrice(cleanPriceList.reduce((prev, current) => prev + current, 0));
  }, [cartList]);

  //Closes Cart with Keyboard
  const closeCartEsc = (event) => {
    if ((event.key === 'Escape') & (isCartVisible === true)) {
      toggleCart();
    }
  };
  return (
    <Router basename='/Calion-Crafting-Shop'>
      <div
        className={`${'main-container'} ${background}`}
        onKeyDown={closeCartEsc}
      >
        <NavBar toggleCart={toggleCart} globalQuantity={globalQuantity} />

        <Routes>
          <Route
            path='/shop'
            element={
              <Shop
                shopList={shopList}
                updateCartList={updateCartList}
                globalQuantity={globalQuantity}
                updateBackground={updateBackground}
              />
            }
          />
          <Route
            path=''
            element={<Home updateBackground={updateBackground} />}
          />
        </Routes>

        <ShoppingCart
          isCartVisible={isCartVisible}
          cartList={cartList}
          modifyCart={modifyCart}
          resetCart={resetCart}
          totalPrice={totalPrice}
          toggleCart={toggleCart}
          globalQuantity={globalQuantity}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
