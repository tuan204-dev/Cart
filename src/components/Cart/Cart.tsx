import React, {useContext} from 'react'
import styles from './Cart.module.scss'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'



const Cart: React.FC = () => {

  const {cart, totalPrice} = useContext(CartContext)

  return (
    <div className={styles.cart}>
      {cart.map(item => (
        <CartItem key={item.id} {...item}/>
      ))}

      <div>
        <p>{`Total: ${totalPrice}`}</p>
      </div>
    </div>
  )
}

export default Cart