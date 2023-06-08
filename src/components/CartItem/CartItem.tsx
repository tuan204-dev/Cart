import React, { useContext } from "react";
import styles from "./CartItem.module.scss";

import { ProductItemProps } from "../ProductItem/ProductItem";
import { CartContext } from "../../context/CartContext";

const CartItem: React.FC<ProductItemProps> = (props) => {
  const { id, name, imgUrl, price } = props;

  const { removeProduct } = useContext(CartContext);

  return (
    <div className={styles["cart-item"]}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={styles.img}
      ></div>
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <span className={styles.price}>{price}</span>
      </div>
      <button onClick={() => removeProduct(id)} className={styles.btn}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
