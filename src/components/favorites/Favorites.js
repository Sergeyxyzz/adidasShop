import styles from './Favorites.module.scss'
import { useState } from 'react'

const Favorites = ({image, price, description, onPlus, onRemoveFavorite, items}) => {
    const [cartOpened, setCartOpened] = useState(false) // блок смены значка на добавление товара и добавление товара в корзину
    const onAddToCart = () => {
        onPlus({price, image, description})
        setCartOpened(!cartOpened)
    }

    return (<>
            <div className={styles.wrapperProduct}>
    {items.map((obj) => (<div className={styles.wrapper}>
            <div className={styles.product}>
            <div>
                <img src="images/remove.png" onClick={() => onRemoveFavorite(obj.id)}  alt="remove" className={styles.iconLike}/>
                <h5>{obj.description}</h5>
            </div>
            <img src={obj.image} alt="Футболка" className={styles.productImg} />
            <div>
                <img onClick={onAddToCart} src={cartOpened ? 'images/added.png' : 'images/plus.png'} alt="" className={styles.iconPlus}/>
                <h5>{obj.price}</h5>
            </div>
            </div>
            </div>
         ))}
        </div>
    </>)
}

export default Favorites