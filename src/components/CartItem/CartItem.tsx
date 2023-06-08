import React, { useContext } from "react";
import styles from "./CartItem.module.scss";

import { ProductItemProps } from "../ProductItem/ProductItem";
import { CartContext } from "../../context/CartContext";

const CartItem: React.FC<ProductItemProps> = (props) => {
  const { id, name, imgUrl, price, quantity } = props;

  const { removeProduct, increaseProduct, decreaseProduct } = useContext(CartContext);

  return (
    <div className={styles["cart-item"]}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={styles.img}
      ></div>
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <span className={styles.price}>{price}</span>
        <span>{`x${quantity}`}</span>
      </div>
      <button onClick={() => removeProduct(id)} className={styles.btn}>
        Remove
      </button>
      <button onClick={() => increaseProduct(id)} className={styles.btn}>
        +
      </button>
      <button onClick={() => decreaseProduct(id)} className={styles.btn}>
        -
      </button>
    </div>
  );
};

export default CartItem;
