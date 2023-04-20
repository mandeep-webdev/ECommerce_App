import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let subTotal = 0;
    cartItems.map(
      (cartItem) =>
        (subTotal += cartItem.attributes.price * cartItem.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const addToCartHandler = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const removeFromCartHandler = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const cartProductQuantityHandler = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === 'incre') {
      items[index].attributes.quantity += 1;
    } else if (type === 'decre') {
      if (items[index].attributes.quantity === 1) {
        return;
      }
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        addToCartHandler,
        removeFromCartHandler,
        cartProductQuantityHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
