import styles from './Cart.module.scss'

const Cart = () => {
    return (<div className={styles.cartWrapper}>
        <img src="images/close.png" alt="close" className={styles.closeImg}/>
        <div className={styles.items}>
            
        </div>
    </div>)
}

export default Cart