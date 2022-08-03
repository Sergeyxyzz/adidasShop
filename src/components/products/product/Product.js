import { useState } from 'react'
import styles from './Product.module.scss'

const Product = () => {
    const [like, setLike] = useState(false)
    const onLike = () => {
        setLike(!like)
    }

    const [addToCart, setAddToCart] = useState(false)
    const onAddToCart = () => {
        setAddToCart(!addToCart)
    }

    return (
        <div className={styles.product}>
            <div>
                <img onClick={onLike} src={like ? 'images/liked.png' : 'images/unliked.png'} alt="like" className={styles.iconLike}/>
                <h5>Название товарa</h5>
            </div>
            <img src="images/t-shirts/1.jpg" alt="Футболка" className={styles.productImg} />
            <div>
                <img onClick={onAddToCart} src={addToCart ? 'images/added.png' : 'images/plus.png'} alt="" className={styles.iconPlus}/>
                <h5>Цена</h5>
            </div>


        </div>
    )
}

export default Product