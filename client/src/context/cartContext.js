const { createContext, useState, useEffect } = require("react");

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* Local Storage */
  useEffect(() => {
    const cartLS = localStorage.getItem("cart");
    if (cartLS) {
      setCart(JSON.parse(cartLS));
    }
  }, []);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          console.log('se actualizo la cantidad');
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      /* update local Storage */
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      alert('Producto agregado al carrito');
      return;
    } else {
      const newCart = [...cart, { ...product, quantity: quantity }];
      console.log('se agrego al carrito');
      /* update local Storage */
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
    alert('Producto agregado al carrito');
  };

  const removeFromCart = (idProduct) => {
    const newCart = cart.filter(product => product.id !== idProduct)
    alert('Producto eliminado del carrito');
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  const isInCart = (idProduct) => {
    const product = cart.find(product => product.id === idProduct)
    return product ? true : false
  }

  const getQuantity = (idProduct) => {
    const product = cart.find(product => product.id === idProduct)
    return product ? product.quantity : 0
  }

  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  const getCart = () => {
    return cart
  }

  const data = { cart, addToCart, removeFromCart, clearCart, isInCart, getQuantity, getTotal, getCart }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }
export default CartContext






    
