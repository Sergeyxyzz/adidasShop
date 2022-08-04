import { useState } from 'react'
import styles from './Product.module.scss'

const Product = ({image, price, description, onPlus}) => {
    const [like, setLike] = useState(false) // блок кода лайк и снять лайк
    const onLike = () => {
        setLike(!like)
    }

    const [cartOpened, setCartOpened] = useState(false) // блок смены значка на добавление товара и добавление товара в корзину
    const onAddToCart = () => {
        onPlus({price, image, description})
        setCartOpened(!cartOpened)
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
                <img onClick={onAddToCart} src={cartOpened ? 'images/added.png' : 'images/plus.png'} alt="" className={styles.iconPlus}/>
                <h5>{price}</h5>
            </div>
        </div>

    </div>
    </>)
}

export default Product