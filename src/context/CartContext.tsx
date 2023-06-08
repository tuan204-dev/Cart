import { createContext, useState, useEffect } from "react";

interface ProductItem {
  id: number;
  quantity: number;
  name: string;
  imgUrl: string;
  price: number;
}

type CartContext = {
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  getItemQuantity: (id: number) => number;
  cart: ProductItem[];
  cartQuantity: number;
  totalPrice: number;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [data, setData] = useState<ProductItem[]>([]);

  useEffect(() => {
    console.log('im here')
    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setData(data)
    };

    fetchData()
  }, []);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  console.log(cart)

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseProduct = (id: number): void => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          return item;
        })
      );
    } else {
      const newItem =  data.find(item => item.id === id)
      if(newItem) {
        setCart(currentCart => [...currentCart, {...newItem, quantity: 1}])
      }
    }
  };

  const decreaseProduct = (id: number): void => {
    if (cart.find((item) => item.id === id)?.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        })
      );
    }
  };

  const removeProduct = (id: number): void => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getItemQuantity = (id: number): number => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{
        increaseProduct,
        decreaseProduct,
        removeProduct,
        getItemQuantity,
        cartQuantity,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
