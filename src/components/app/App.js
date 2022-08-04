import Cart from '../cart/Cart';
import Header from '../header/Header';
import Product from '../product/Product'
import styles from './App.module.scss'
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://62eb0c07705264f263d29ed6.mockapi.io/items').then(res => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  return (<>
    <Cart/>
    <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>Футболки</h1>
      <div className={styles.wrapperProduct}>
      {items.map((obj) => {
        return <Product 
          image={obj.image} 
          price={obj.price} 
          description={obj.description}/>
      })}
      </div>
    </div>
    </>);
}

export default App;
