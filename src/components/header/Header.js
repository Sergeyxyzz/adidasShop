import styles from './Header.module.scss'

const Header = ({onCart}) => {
    return (<div className={styles.wrapper}>
            <div className={styles.search}>
                <img src="images/search.png" alt="search" width={50} />
                <input type="text" placeholder='Поиск товаров' />
            </div>
            <div className={styles.logo}>
                <img src="images/adidas_logo.png" alt="Adidas logo" height={'45'} />
            </div>
            <div className={styles.cart}>
                <img onClick={onCart} src="images/cart.png" alt="Cart" width={45} />
            </div>
    </div>)
}

export default Header