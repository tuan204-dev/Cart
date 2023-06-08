import styles from './ProductItem.module.scss'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';



export interface ProductItemProps {
  id: number;
  quantity: number;
  name: string;
  imgUrl: string;
  price: number
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  quantity,
  name,
  imgUrl,
  price
}) => {

  const {increaseProduct} = useContext(CartContext)



  return (
    <div className={styles.product}>
      <div style={{backgroundImage: `url(${imgUrl})`}} className={styles.img}>
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{`${id} ${name}`}</p>
        <span className={styles.quantity}>{quantity}</span>
        <p>{`Price: ${price}`}</p>
      </div>
      <button onClick={() => increaseProduct(id)}>Add</button>
    </div>
  );
};

export default ProductItem;
