import Header from '../header/Header';
import Product from '../product/Product'
import styles from './App.module.scss'

function App() {

  const state = [
    {
      description: 'Футболка XZ500',
      image: "images/t-shirts/1.jpg",
      price: 500
    },
    {
      description: 'Футболка SS3000',
      image: "images/t-shirts/2.jpg",
      price: 1600
    },
    {
      description: 'Футболка Walker',
      image: "images/t-shirts/3.jpg",
      price: 1800
    },
    {
      description: 'Футболка Sky',
      image: "images/t-shirts/4.jpg",
      price: 999
    },
    {
      description: 'Футболка RND',
      image: "images/t-shirts/5.jpg",
      price: 600
    },
    {
      description: 'Футболка GoEr',
      image: "images/t-shirts/6.jpg",
      price: 2500
    },
    {
      description: 'Футболка lanGo',
      image: "images/t-shirts/7.jpg",
      price: 900
    }
  ]

  return (
    <div className={styles.wrapper}>
      <Header/>
      <h1 className={styles.title}>Футболки</h1>
      <div className={styles.wrapperProduct}>
      {state.map((obj) => {
        return <Product 
          image={obj.image} 
          price={obj.price} 
          description={obj.description}/>
      })}
      </div>
    </div>
  );
}

export default App;
