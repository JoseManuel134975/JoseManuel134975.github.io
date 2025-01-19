import styles from './Card.module.css';


export default function Card({ obj }){
    return(
        <>
            <article className={styles.card}>
                <img src={obj.image} alt="Imagen" />
                <h2>Title: {obj.title}</h2>
                <p>Description: {obj.description}</p>
                <p>Categoría: {obj.category}</p>
                <b>Price: {obj.price}</b>
            </article>
        </>
    )
}