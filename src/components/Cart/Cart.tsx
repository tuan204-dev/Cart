import React, {useContext} from 'react'
import styles from './Cart.module.scss'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'



const Cart: React.FC = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className={styles.cart}>
      {cart.map(item => (
        <CartItem key={item.id} name={item.name} imgUrl={item.imgUrl} price={item.price} id={item.id} quantity={item.quantity}/>
      ))}
    </div>
  )
}

export default Cart