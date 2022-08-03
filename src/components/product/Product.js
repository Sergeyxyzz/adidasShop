import { useState } from 'react'
import styles from './Product.module.scss'

const Product = ({image, price, description}) => {
    const [like, setLike] = useState(false)
    const onLike = () => {
        setLike(!like)
    }

    const [addToCart, setAddToCart] = useState(false)
    const onAddToCart = () => {
        setAddToCart(!addToCart)
    }

    return (<>
        <div className={styles.wrapper}>
        <div className={styles.product}>
            <div>
                <img onClick={onLike} src={like ? 'images/liked.png' : 'images/unliked.png'} alt="like" className={styles.iconLike}/>
                <h5>{description}</h5>
            </div>
            <img src={image} alt="Футболка" className={styles.productImg} />
            <div>
                <img onClick={onAddToCart} src={addToCart ? 'images/added.png' : 'images/plus.png'} alt="" className={styles.iconPlus}/>
                <h5>{price}</h5>
            </div>
        </div>

    </div>
    </>)
}

export default Product