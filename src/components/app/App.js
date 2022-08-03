import Header from '../header/Header';
import Products from '../products/Products'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
