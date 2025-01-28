import Product from './Product.jsx'
import styles from './Grid.module.css'


export default function Grid(){
    return (
        <>
            <section className={ styles.grid }>
                <Product></Product>
            </section>
        </>
    )
}