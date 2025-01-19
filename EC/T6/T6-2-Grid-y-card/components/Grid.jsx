import styles from './Grid.module.css';
import Card from './Card.jsx';
import { useState, useEffect } from 'react';



export default function Grid() {
    const [json, setProducts] = useState([]);

    useEffect(() => {
        fetch('../data/productos.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    return (
        <section className={styles.grid}>
            {json.map((item) => (
                <Card key={item.id} obj={item}></Card>
            ))}
        </section>
    );
}