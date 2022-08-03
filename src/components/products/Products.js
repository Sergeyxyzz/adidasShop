import Product from './product/Product'
import styles from './Products.module.scss'

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>

const Products = () => {
    return (<>
        <div className={styles.header}><h1>Футболки</h1></div>
        <div className={styles.wrapper}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </>)
}

export default Products