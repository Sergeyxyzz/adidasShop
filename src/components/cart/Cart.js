import styles from './Cart.module.scss'

const Cart = ({closeCart, onRemoveItem, items=[]}) => {
    return (<div className={styles.cartWrapper}>
        <img onClick={closeCart} src="images/close.png" alt="close" className={styles.closeImg}/>
        <div className={styles.items}>
            {items.map((obj) => (<div className={styles.item}>
                <img className={styles.image} src={obj.image} alt="Футболка" />
                <h4>{obj.description}</h4>
                <h3>{obj.price} руб.</h3>
                <img src="images/remove.png" onClick={() => onRemoveItem(obj.id)}  alt="remove" className={styles.removeImg}/>
                <hr />
            </div>))}
        </div>
    </div>)
}

export default Cart