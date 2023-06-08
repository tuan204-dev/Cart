import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem/ProductItem";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

interface ProductItemProps {
  id: number;
  quantity: number;
  name: string;
  imgUrl: string;
  price: number;
}

function App() {
  const [productList, setProductList] = useState<ProductItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setProductList(data);
    };
    fetchData();
  }, []);

  return (
    <CartProvider>
      <div style={{ display: "flex" }}>
        <div
          style={{ flex: "1", display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {productList.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
}




export default App;
