import Cart from '../cart/Cart';
import Header from '../header/Header';
import Product from '../product/Product'
import styles from './App.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Favorites from '../favorites/Favorites';
import {Routes, Route} from 'react-router-dom'

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

  const [favoritesCart, setFavoritesCart] = useState([]) // display favorites
  useEffect(() => {
    axios.get('https://62eb0c07705264f263d29ed6.mockapi.io/favorites').then(res => {
      setFavoritesCart(res.data)
    })
  }) // end block

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

  const onPlusFavorite = (item) => {
    axios.post('https://62eb0c07705264f263d29ed6.mockapi.io/favorites', item)
    setCartItems([...cartItems, item]) 
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62eb0c07705264f263d29ed6.mockapi.io/cart/${id}`)
    itemsCart((obj) => obj.filter((items) => items.id !== id))
  }

  const onRemoveFavorite = (id) => {
    axios.delete(`https://62eb0c07705264f263d29ed6.mockapi.io/favorites/${id}`)
    itemsCart((obj) => obj.filter((items) => items.id !== id))
  }
  

  return (<>
    {cart ? <Cart items={itemsCart} closeCart={closeCart} onRemoveItem={onRemoveItem}/> : null}
      <Header onCart={onCart} closeCart={closeCart} onPlusFavorite={onPlusFavorite} />
      <h1 className={styles.title}>Футболки</h1>
      <div className={styles.wrapper}>
      <div className={styles.wrapperProduct}>
      <Routes>
        <Route path='/' element={items.map((obj) => {
        return <Product
          image={obj.image} 
          price={obj.price} 
          description={obj.description}
          onPlusFavorite={onPlusFavorite}
          onPlus={(item) => onPlus(item)}/> 
      })}/>
        <Route path='favorites' element={favoritesCart.map((obj) => {
        return <Favorites 
          items={favoritesCart}
          onRemoveFavorite={onRemoveFavorite}
          closeCart={closeCart}
          image={obj.image} 
          price={obj.price} 
          description={obj.description}
       />
      })}/>
      </Routes>
      </div>
    </div>
    </>);
}

export default App;
