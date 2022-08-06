import Cart from '../cart/Cart';
import Header from '../header/Header';
import Product from '../product/Product'
import styles from './App.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]) // блок получения данных с инета
  useEffect(() => {
    axios.get('https://62eb0c07705264f263d29ed6.mockapi.io/items').then(res => {
      setItems(res.data)
    })
  }, []) // конец блока получения данных

  const [itemsCart, setItemsCart] = useState([]) // получили данные в корзине и отобразили их в корзине
  useEffect(() => {
    axios.get('https://62eb0c07705264f263d29ed6.mockapi.io/cart').then(res => {
      setItemsCart(res.data)
    })
  }, []) // конец блока

  const [cart, setCart] = useState(false) // блок открытия/закрытия корзины по клику
  const onCart = () => {
    setCart(!cart)
  }
  const closeCart = () => {
    setCart(!cart)
  } // конец блока

  const [cartItems, setCartItems] = useState([]) // блок добавления товара в корзину
  const onPlus = (item) => {
    axios.post('https://62eb0c07705264f263d29ed6.mockapi.io/cart', item)
    setCartItems([...cartItems, item]) // обязательно разворачивать старый массив, затем пушим таким образом объект футболки из инета
  } // конец блока


  const onRemoveItem = (id) => {
    axios.delete(`https://62eb0c07705264f263d29ed6.mockapi.io/cart/${id}`)
    itemsCart((obj) => obj.filter((items) => items.id !== id))
  }

  return (<>
    {cart ? <Cart items={itemsCart} closeCart={closeCart} onRemoveItem={onRemoveItem}/> : null}
    <div className={styles.wrapper}>
      <Header onCart={onCart} closeCart={closeCart} />
      <h1 className={styles.title}>Футболки</h1>
      <div className={styles.wrapperProduct}>
      {items.map((obj) => {
        return <Product
          image={obj.image} 
          price={obj.price} 
          description={obj.description}
          onPlus={(item) => onPlus(item)}/> // item - оъект футболка из инета
      })}
      </div>
    </div>
    </>);
}

export default App;
