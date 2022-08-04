import Cart from '../cart/Cart';
import Header from '../header/Header';
import Product from '../product/Product'
import styles from './App.module.scss'
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]) // блок получения данных с инета
  useEffect(() => {
    fetch('https://62eb0c07705264f263d29ed6.mockapi.io/items').then(res => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, []) // конец блока получения данных

  const [cart, setCart] = useState(false) // блок открытия/закрытия корзины по клику
  const onCart = () => {
    setCart(!cart)
  }
  const closeCart = () => {
    setCart(!cart)
  } // конец блока

  const [cartItems, setCartItems] = useState([]) // блок добавления товара в корзину
  const onPlus = (item) => {
    setCartItems([...cartItems, item]) // обязательно разворачивать старый массив, затем пушим таким образом объект футболки из инета
  } // конец блока

  return (<>
    {cart ? <Cart items={cartItems} closeCart={closeCart}/> : null}
    <div className={styles.wrapper}>
      <Header onCart={onCart} closeCart={closeCart}/>
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
